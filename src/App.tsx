import React, { useContext } from 'react';
import { client } from './graphQL';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { Navigation } from './components/nav/Navigation';
import { Domains } from './components/pages/Domains';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Settings } from './components/pages/Settings';
import { ApolloProvider } from '@apollo/client';
import { Box } from '@mui/material';
import { StoreProvider } from './StoreProvider';

export const ROOT = '/';
export const HOME = '/home';
export const DOMAINS = '/domains';
export const SETTINGS = '/settings';
export const LOGOUT = '/logout';

const App: React.FC = (): JSX.Element => {
    const store = useContext(StoreProvider);
    const loggedIn = !!store.token;
    const notLoggedInRouters = createBrowserRouter([
        {
            path: ROOT,
            element: <Login />,
        },
    ]);

    const loggedInRouters = createBrowserRouter([
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

    return (
        <ApolloProvider client={client(store.token)}>
            ${loggedIn ? (
            <>
                <Navigation/>
                <Box p={2}/>
            </>
        ) : <></>}
            <RouterProvider router={loggedIn ? loggedInRouters : notLoggedInRouters}/>
        </ApolloProvider>
    );
};

export default App;
