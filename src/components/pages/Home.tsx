import React from 'react';
import { Domains } from '../panels/Domains';
import { DefaultSubDomains } from '../panels/DefaultSubDomains';
import { Container, Grid } from '@mui/material';

export const Home: React.FC = (): JSX.Element => {
    return (
        <Container component='main'>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Domains />
                </Grid>
                <Grid item xs={3}>
                    <DefaultSubDomains />
                </Grid>
            </Grid>
        </Container>
    );
};
