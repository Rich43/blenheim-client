import React, { useReducer } from 'react';
import { client } from './graphQL';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { Navigation } from './components/nav/Navigation';
import { Domains } from './components/pages/Domains';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Router } from '@remix-run/router';
import { Settings } from './components/pages/Settings';
import { ApolloProvider } from '@apollo/client';
import { Box } from '@mui/material';
import { reducer, userContextValue, UserDispatchContext, UserStateContext } from './userStoreProvider';

export const ROOT = '/';
export const HOME = '/home';
export const DOMAINS = '/domains';
export const SETTINGS = '/settings';
export const LOGOUT = '/logout';

const App: React.FC = (): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, userContextValue);
    const loggedIn = !!state.token;

    let router: Router;
    if (loggedIn) {
        router = createBrowserRouter([
            {
                path: HOME,
                element: <Home />,
            },
            {
                path: DOMAINS,
                element: <Domains />
            },
            {
                path: SETTINGS,
                element: <Settings />
            },
            {
                path: LOGOUT,
                element: <Logout />
            }
        ]);
    } else {
        router = createBrowserRouter([
            {
                path: ROOT,
                element: <Login/>,
            },
        ]);
    }

    return (
        <UserDispatchContext.Provider value={dispatch}>
            <UserStateContext.Provider value={state}>
                <ApolloProvider client={client(state.token || undefined)}>
                    {loggedIn ? (
                        <>
                            <Navigation/>
                            <Box p={2}/>
                        </>
                    ) : <></>}
                    <RouterProvider router={router}/>
                </ApolloProvider>
            </UserStateContext.Provider>
        </UserDispatchContext.Provider>
    );
};

export default App;
