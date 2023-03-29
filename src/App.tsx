import React, { useReducer } from 'react';
import { client } from './graphQL';
import { Navigation } from './components/nav/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Box } from '@mui/material';
import { reducer, userContextValue, UserDispatchContext, UserStateContext } from './userStoreProvider';
import { LoginRoutes } from './routes/LoginRoutes';
import { MainRoutes } from './routes/MainRoutes';

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
                    <BrowserRouter>
                        {loggedIn ? (
                            <>
                                <Navigation/>
                                <Box p={2}/>
                                <MainRoutes/>
                            </>
                        ) : <LoginRoutes/>}
                    </BrowserRouter>
                </ApolloProvider>
            </UserStateContext.Provider>
        </UserDispatchContext.Provider>
    );
};

export default App;
