import React, { useContext, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Container, Theme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Logo } from '../Logo';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { StoreProvider } from '../../StoreProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react-lite';
import useReactRouter from 'use-react-router';
import { HOME } from '../../App';
import { Login as LoginType, LoginVariables } from '../../types/Login';
import { useLazyQuery } from '@apollo/client';
import { LOGIN_QUERY } from '../queries/LoginQuery';

const useStyles = makeStyles<Theme, {}>((theme) => {
    return ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        },
        svg: {
            width: 280,
            height: 211
        }
    });
});

export const Login: React.FC = observer((): JSX.Element => {
    const classes = useStyles();
    const store = useContext(StoreProvider);
    const [logIn, setLogIn] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { history } = useReactRouter();
    const [getLogin, { loading, error, data }] = useLazyQuery<LoginType, LoginVariables>(
        LOGIN_QUERY,
        { fetchPolicy: 'no-cache' }
    );

    if (data && data.authentication) {
        const token = data.authentication.login;
        if (token) {
            store.token = token;
            store.user = username;
            setLogIn(false);
            history.push(HOME);
        } else {
            store.token = '';
            store.user = '';
            setLogIn(false);
        }
    }

    useEffect(() => {
        if (logIn) {
            getLogin({ variables: { username, password } });
        }
    }, [logIn, username, password]);

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Logo viewBox='0 0 280 211' className={classes.svg}/>
                <Box p={3} />
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='username'
                        label='Username'
                        name='username'
                        autoComplete='username'
                        autoFocus
                        onChange={event => setUsername(event.target.value)}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={event => setPassword(event.target.value)}
                    />
                    <Button
                        onClick={event => {
                            event.preventDefault();
                            setLogIn(true);
                        }}
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                        href=''
                    >
                        Sign In
                    </Button>
                </form>
                { logIn && loading && (<span>Loading...</span>) }
                { logIn && error && (<span>Error! {error.message}</span>) }
            </div>
        </Container>
    );
});
