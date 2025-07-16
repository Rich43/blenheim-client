import React from 'react';
import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { SideDrawer } from '../../src/components/nav/SideDrawer';
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

const mountDrawer = () => mount(<SideDrawer />, { wrapper: Providers });

const menu: Array<[string, string]> = [
  ['/home', 'Home'],
  ['/domains', 'Domains'],
  ['/settings', 'Settings'],
  ['/logout', 'Logout'],
];

describe('SideDrawer', () => {
  it('opens and closes via icon buttons', () => {
    mountDrawer();
    cy.get('div.MuiDrawer-root').should('not.exist');
    cy.get('button[aria-label="Open drawer"]').click();
    cy.get('div.MuiDrawer-root').should('exist');
    cy.get('[data-testid="CloseIcon"]').closest('button').click();
    cy.get('div.MuiDrawer-root').should('not.exist');
  });

  menu.forEach(([path, label]) => {
    it(`navigates to ${path} when selecting ${label}`, () => {
      mountDrawer();
      cy.window().then(win => cy.stub(win.location, 'assign').as('assign'));
      cy.get('button[aria-label="Open drawer"]').click();
      cy.contains('a', label)
        .should('have.attr', 'href', path)
        .click();
      cy.get('@assign').should('have.been.calledWith', path);
      cy.get('div.MuiDrawer-root').should('not.exist');
    });
  });
});
