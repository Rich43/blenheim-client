import React, { FunctionComponent, useState } from 'react';
import { Logo } from '../Logo';
import { DOMAINS, HOME, LOGOUT, SETTINGS } from '../../App';
import { Box, Drawer, IconButton, Link, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';

const classes: { [key: string]: React.CSSProperties } = {
    list: {
        width: 200
    },
    logo: {
        width: 140,
        height: 105.5
    }
};

export const SideDrawer: FunctionComponent = () => {
    const [open, setOpen] = useState(false);
    const menu = [
        [HOME, 'Home'],
        [DOMAINS, 'Domains'],
        [SETTINGS, 'Settings'],
        [LOGOUT, 'Logout']
    ];
    let count = 0;

    return (
        <>
            <IconButton
                edge='start'
                color='inherit'
                aria-label='Open drawer'
                onClick={(() => setOpen(true))}>
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box display='flex' flexDirection='column'>
                    <Box display='flex' flexDirection='row'>
                        <Box display='flex' flexGrow={1} />
                        <IconButton onClick={() => setOpen(false)}>
                            <Close />
                        </IconButton>
                    </Box>
                    <Box display='flex' flexDirection='row' justifyContent='center'>
                        <Logo style={classes.logo} viewBox='0 0 280 211' />
                    </Box>
                    <List style={classes.list}>
                        {menu.map(item => {
                            count++;
                            return (
                                <Link href={item[0]} key={count} onClick={() => setOpen(false)}>
                                    <ListItemButton key={count}>
                                        <ListItemText>{item[1]}</ListItemText>
                                    </ListItemButton>
                                </Link>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};
