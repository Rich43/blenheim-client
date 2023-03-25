import React, { FunctionComponent } from 'react';
import { DefaultSubdomainsMutableList } from '../lists/custom/DefaultSubdomainsMutableList';
import { IPv6MutableList } from '../lists/custom/IPv6MutableList';
import { IPv4MutableList } from '../lists/custom/IPv4MutableList';
import { Box, Container, Paper } from '@mui/material';

export const Settings: FunctionComponent = () => {
    return (
        <form>
            <Container maxWidth='sm'>
                <Paper>
                    <DefaultSubdomainsMutableList />
                </Paper>
                <Box p={2} />
                <Paper>
                    <IPv4MutableList />
                </Paper>
                <Box p={2} />
                <Paper>
                    <IPv6MutableList />
                </Paper>
            </Container>
        </form>
    );
};
