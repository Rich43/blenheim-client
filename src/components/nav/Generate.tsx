/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Box, Button, Theme, Typography } from '@material-ui/core';
import { QUERY } from '../queries/DnsQuery';
import { StoreProvider } from '../../StoreProvider';
import { Dns, DnsVariables } from '../../types/Dns';
import { SingleButtonDialog } from '../dialogs/generic/SingleButtonDialog';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useLazyQuery } from '@apollo/client';

// eslint-disable-next-line @typescript-eslint/ban-types
const useStyles = makeStyles<Theme, { }>((theme) => {
    return ({
        icon: {
            paddingRight: theme.spacing(1)
        }
    });
});

export const Generate: FunctionComponent = () => {
    const store = useContext(StoreProvider);
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState(false);
    const [getDNS, { loading, error: queryError, data }] = useLazyQuery<Dns, DnsVariables>(
        QUERY,
        { variables: { token: store.token }, fetchPolicy: 'no-cache' }
    );

    if (loading) {
        setError(false);
        setResult('Loading...');
    }

    if (queryError) {
        setError(true);
        setResult(queryError.message || '');
    }

    if (data && data.dns.generate.success) {
        setError(false);
        setResult('Generated.');
    } else if (data && !data.dns.generate.success) {
        setError(true);
        setResult((data && data.dns.generate.error) || '');
    }

    useEffect(() => {
        if (dialogOpen) {
            getDNS();
        }
    }, [dialogOpen]);

    return (
        <>
            <SingleButtonDialog
                dialogOpen={dialogOpen}
                okClicked={() => { }}
                onClose={() => {
                    setDialogOpen(false);
                    setError(false);
                    setResult('');
                }}
                dialogTitle='Generate'
                dialogContent={(
                    <>
                        <Typography variant='subtitle1'>Generating configuration files...</Typography>
                        <Box p={1} />
                        {dialogOpen && result.length > 0 && (
                            <Typography variant='subtitle1' color={error ? 'error' : undefined}>
                                {error
                                    ? <ErrorIcon color='error' className={classes.icon} />
                                    : <InfoIcon color='primary' className={classes.icon} />
                                }
                                {result}
                            </Typography>
                        )}
                    </>
                )}
                buttonDisabled={result === ''}
            />
            <Box pr={2}>
                <Button variant='contained' onClick={() => setDialogOpen(true)}>Generate</Button>
            </Box>
        </>
    );
};
