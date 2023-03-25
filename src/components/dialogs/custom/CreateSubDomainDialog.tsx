import React, { FunctionComponent, useContext } from 'react';
import { TextFieldDialog } from '../generic/TextFieldDialog';
import { useCreateSubDomainMutation } from '../../queries/mutations/create/CreateSubDomainMutation';
import { StoreProvider } from '../../../StoreProvider';
import { IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

export const CreateSubDomainDialog: FunctionComponent<{
    domainName: string;
}> = ({ domainName }) => {
    const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
    const [createSubDomain] = useCreateSubDomainMutation();
    const store = useContext(StoreProvider);
    const [dialogText, setDialogText] = React.useState<string>('');

    return (
        <>
            <IconButton onClick={() => setDialogOpen(true)}><Add/></IconButton>
            <TextFieldDialog
                dialogOpen={dialogOpen}
                onClose={() => setDialogOpen(false)}
                okClicked={() => {
                    createSubDomain({ variables: { token: store.token, id: domainName, name: dialogText } }).then();
                }}
                onChange={event => setDialogText(event.target.value || '')}
                dialogTitle='Add Subdomain'
                dialogContentText={`Enter the subdomain name in the box below. For example: <subdomain>.${domainName}`}
                textBoxLabel='Subdomain:'
                textBoxValue={dialogText}
            />
        </>
    );
};
