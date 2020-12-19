import React from 'react';
import { client } from './graphQL';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { RequireAuth } from './components/RequireAuth';
import { Navigation } from './components/nav/Navigation';
import { Domains } from './components/pages/Domains';
import { BrowserRouter, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Settings } from './components/pages/Settings';
import { ApolloProvider } from '@apollo/client';

export const ROOT = '/';
export const HOME = '/home';
export const DOMAINS = '/domains';
export const SETTINGS = '/settings';
export const LOGOUT = '/logout';

const App: React.FC = (): JSX.Element => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Route exact path={ROOT} component={Login} />
                <RequireAuth>
                    <Navigation />
                    <Box p={2} />
                    <Route path={HOME} component={Home} />
                    <Route path={DOMAINS} component={Domains} />
                    <Route path={SETTINGS} component={Settings} />
                    <Route path={LOGOUT} component={Logout} />
                </RequireAuth>
            </BrowserRouter>
        </ApolloProvider>
    );
};

export default App;
