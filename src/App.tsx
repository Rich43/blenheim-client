import React, { useReducer } from 'react';
import { client } from './graphQL';
import { ApolloProvider } from '@apollo/client';
import { reducer, userContextValue, UserDispatchContext, UserStateContext } from './userStoreProvider';
import { MainRoutes } from './MainRoutes';

export const ROOT = '/';
export const HOME = '/home';
export const DOMAINS = '/domains';
export const SETTINGS = '/settings';
export const LOGOUT = '/logout';

const App: React.FC = (): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, userContextValue);
    const loggedIn = !!state.token;

    return (
        <UserDispatchContext.Provider value={dispatch}>
            <UserStateContext.Provider value={state}>
                <ApolloProvider client={client(state.token || undefined)}>
                    <MainRoutes loggedIn={loggedIn}/>
                </ApolloProvider>
            </UserStateContext.Provider>
        </UserDispatchContext.Provider>
    );
};

export default App;
