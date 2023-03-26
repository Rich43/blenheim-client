import React, { FunctionComponent, useEffect, useState } from 'react';
import { QUERY } from '../queries/DnsQuery';
import { SingleButtonDialog } from '../dialogs/generic/SingleButtonDialog';
import { useLazyQuery } from '@apollo/client';
import { Box, Button, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import { DnsQuery, DnsQueryVariables } from '../../gql/graphql';

const classes: { [key: string]: React.CSSProperties } = {
    icon: {
        paddingRight: 1
    }
};

export const Generate: FunctionComponent = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState(false);
    const [getDNS, {loading, error: queryError, data}] = useLazyQuery<DnsQuery, DnsQueryVariables>(
        QUERY,
        {variables: {}, fetchPolicy: 'no-cache'}
    );

    useEffect(() => {
        if (loading) {
            setError(false);
            setResult('Loading...');
        }
    }, [loading]);

    useEffect(() => {
        if (queryError) {
            setError(true);
            setResult(queryError.message || '');
        }
    }, [queryError]);

    useEffect(() => {
        if (data && data.dns.generate.success) {
            setError(false);
            setResult('Generated.');
        } else if (data && !data.dns.generate.success) {
            setError(true);
            setResult((data && data.dns.generate.error) || '');
        }
    }, [data]);

    useEffect(() => {
        if (dialogOpen) {
            getDNS();
        }
    }, [dialogOpen]);

    return (
        <>
            <SingleButtonDialog
                dialogOpen={dialogOpen}
                okClicked={() => {
                }}
                onClose={() => {
                    setDialogOpen(false);
                    setError(false);
                    setResult('');
                }}
                dialogTitle="Generate"
                dialogContent={(
                    <>
                        <Typography variant="subtitle1">Generating configuration files...</Typography>
                        <Box p={1}/>
                        {dialogOpen && result.length > 0 && (
                            <Typography variant="subtitle1" color={error ? 'error' : undefined}>
                                {error
                                    ? <ErrorIcon color="error" style={classes.icon}/>
                                    : <InfoIcon color="primary" style={classes.icon}/>
                                }
                                {result}
                            </Typography>
                        )}
                    </>
                )}
                buttonDisabled={result === ''}
            />
            <Box pr={2}>
                <Button variant="contained" onClick={() => setDialogOpen(true)}>Generate</Button>
            </Box>
        </>
    );
};
