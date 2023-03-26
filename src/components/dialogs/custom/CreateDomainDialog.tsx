import React, { FunctionComponent } from 'react';
import { TextFieldDialog } from '../generic/TextFieldDialog';
import { useCreateDomainMutation } from '../../queries/mutations/create/CreateDomainMutation';
import { updateDomainsCache } from '../../queries/DomainsQuery';

export const CreateDomainDialog: FunctionComponent<{
    dialogOpen: boolean;
    onClose: () => void;
}> = ({ dialogOpen, onClose }) => {
    const [createDomain] = useCreateDomainMutation();
    const [dialogText, setDialogText] = React.useState<string>('');

    return (
        <TextFieldDialog
            dialogOpen={dialogOpen}
            onClose={onClose}
            okClicked={
                () => {
                    createDomain(
                        {
                            variables: {id: dialogText},
                            update: updateDomainsCache('createDomain')
                        }
                    ).then();
                }
            }
            onChange={event => setDialogText(event.target.value || '')}
            dialogTitle='Add Domain'
            dialogContentText='Enter the domain name in the box below. For example: example.com'
            textBoxLabel='Domain:'
            textBoxValue={dialogText}
        />
    );
};
