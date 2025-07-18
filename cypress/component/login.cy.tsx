import React from 'react';
import { mount } from '@cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import * as Router from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Login } from '../../src/components/pages/Login';
import { client } from '../../src/graphQL';
import {
  reducer,
  userContextValue,
  UserDispatchContext,
  UserStateContext,
} from '../../src/userStoreProvider';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, userContextValue);
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        <ApolloProvider client={client()}>
          <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
        </ApolloProvider>
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

const mountLogin = () => mount(<Login />, { wrapper: Providers });

const maybeIt =
  Cypress.isBrowser('electron') && Cypress.browser.isHeadless ? it.skip : it;

describe('Login Page', () => {
  beforeEach(() => {
    cy.stub(Router, 'useNavigate').returns(() => {});
  });
  maybeIt('validates required form fields', () => {
    mountLogin();
    cy.get('button[type="submit"]').click();
    cy.get('#username:invalid').should('exist');
    cy.get('#password:invalid').should('exist');
  });

  maybeIt('stores token after successful login', () => {
    cy.intercept('POST', '/graphql', req => {
      if (req.body.operationName === 'Login') {
        req.alias = 'loginRequest';
        req.reply({
          body: {
            data: { authentication: { login: 'fake-token' } },
          },
        });
      }
    });

    mountLogin();

    cy.get('input[name="username"]').type('alice');
    cy.get('input[name="password"]').type('secret');
    cy.get('form').submit();

    cy.wait('@loginRequest');
    cy.window().then(win => {
      expect(win.localStorage.getItem('user')).to.equal('alice');
      expect(win.localStorage.getItem('token')).to.equal('fake-token');
    });
  });
});
