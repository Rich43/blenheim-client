import React, { useContext, useEffect } from 'react';
import { Logo } from '../Logo';
import { StoreProvider } from '../../StoreProvider';
import { observer } from 'mobx-react-lite';
import { HOME } from '../../App';
import { Login as LoginType, LoginVariables } from '../../types/Login';
import { useLazyQuery } from '@apollo/client';
import { LOGIN_QUERY } from '../queries/LoginQuery';
import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { redirect } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const classes: { [key: string]: React.CSSProperties } = {
    paper: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: 1,
        backgroundColor: 'secondary.main'
    },
    form: {
        width: '100%',
        marginTop: 1
    },
    submit: {
        margin: '3 0 2'
    },
    svg: {
        width: 280,
        height: 211
    }
};

export const Login: React.FC = observer((): JSX.Element => {
    const store = useContext(StoreProvider);
    const [logIn, setLogIn] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [getLogin, {loading, error, data}] = useLazyQuery<LoginType, LoginVariables>(
        LOGIN_QUERY,
        {fetchPolicy: 'no-cache'}
    );

    useEffect(() => {
        if (data && data.authentication) {
            const token = data.authentication.login;
            if (token) {
                store.token = token;
                store.user = username;
                setLogIn(false);
                redirect(HOME);
            } else {
                store.token = '';
                store.user = '';
                setLogIn(false);
            }
        }
    }, [data]);

    useEffect(() => {
        if (logIn) {
            getLogin({variables: {username, password}}).then(ignore => {});
        }
    }, [logIn, username, password]);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div style={classes.paper}>
                <Logo viewBox="0 0 280 211" style={classes.svg}/>
                <Box p={3}/>
                <Avatar style={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form style={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={event => setUsername(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button
                        onClick={event => {
                            event.preventDefault();
                            setLogIn(true);
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={classes.submit}
                        href=""
                    >
                        Sign In
                    </Button>
                </form>
                {logIn && loading && (<span>Loading...</span>)}
                {logIn && error && (<span>Error! {error.message}</span>)}
            </div>
        </Container>
    );
});
