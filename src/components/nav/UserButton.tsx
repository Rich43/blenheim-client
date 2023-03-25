import React, { FunctionComponent, useContext } from 'react';
import { StoreProvider } from '../../StoreProvider';
import { deepPurple } from '@mui/material/colors';
import { redirect } from 'react-router-dom';
import { LOGOUT } from '../../App';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';

const classes: { [key: string]: React.CSSProperties } = {
    avatar: {
        backgroundColor: deepPurple[500]
    }
};

export const UserButton: FunctionComponent = () => {
    const [menuEl, setMenuEl] = React.useState<null | HTMLElement>(null);
    const id = menuEl ? 'avatar-menu' : undefined;
    const store = useContext(StoreProvider);

    function handleLogout() {
        setMenuEl(null);
        redirect(LOGOUT);
    }

    return (
        <>
            <IconButton aria-describedby={id} onClick={event => setMenuEl(event.currentTarget)}>
                <Avatar style={classes.avatar}>{store.user.substr(0, 2).toUpperCase()}</Avatar>
            </IconButton>
            <Menu
                id={id}
                anchorEl={menuEl}
                open={Boolean(menuEl)}
                onClose={() => setMenuEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
};
