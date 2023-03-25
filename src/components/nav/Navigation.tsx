import React, { FunctionComponent } from 'react';
import { UserButton } from './UserButton';
import { SideDrawer } from './SideDrawer';
import { Generate } from './Generate';
import { AppBar, Toolbar, Typography } from '@mui/material';

const classes: { [key: string]: React.CSSProperties } = {
    title: {
        flexGrow: 1
    }
};

export const Navigation: FunctionComponent = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <SideDrawer/>
                <Typography variant="h6" style={classes.title}>Blenheim</Typography>
                <Generate/>
                <UserButton/>
            </Toolbar>
        </AppBar>
    );
};
