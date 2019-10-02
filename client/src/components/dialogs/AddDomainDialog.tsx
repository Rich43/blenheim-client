import React, { FunctionComponent, useContext } from 'react';
import { TextFieldDialog } from './TextFieldDialog';
import { StoreProvider } from '../../StoreProvider';
import { useAddDomainMutation } from "../queries/AddDomainQuery";

interface AddDomainProps {
    refetch: () => void;
    dialogOpen: boolean;
    setDialogOpen: (open: boolean) => void;
}

export const AddDomainDialog: FunctionComponent<AddDomainProps> = (props) => {
    const [addDomain] = useAddDomainMutation();
    const store = useContext(StoreProvider);
    const [dialogText, setDialogText] = React.useState<string>('');

    return (
        <TextFieldDialog
            dialogOpen={props.dialogOpen}
            setDialogOpen={props.setDialogOpen}
            okClicked={() => {
                addDomain({variables: {token: store.token, id: dialogText}})
                    .then(dummy => props.refetch());
                props.setDialogOpen(false);
            }}
            onChange={event => setDialogText(event.target.value || '')}
            dialogTitle='Add Domain'
            dialogContentText='Enter the domain name in the box below. For example: example.com'
            textBoxLabel='Domain:'
        />
    );
}