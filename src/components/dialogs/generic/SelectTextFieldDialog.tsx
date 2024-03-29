import React, { FunctionComponent } from 'react';
import { AbstractDialog, AbstractDialogProps } from './AbstractDialog';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { MenuItem, Select, TextField } from '@mui/material';

interface SelectTextFieldDialogProps extends AbstractDialogProps {
    selectData: {[key: string]: string}
    textBoxLabel: string;
    textBoxValue: string;
    selectInitialValue: unknown;
    onSelectChange: SelectInputProps['onChange'];
    onTextFieldChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}

export const SelectTextFieldDialog: FunctionComponent<SelectTextFieldDialogProps> = (props) => {
    return (
        <AbstractDialog
            dialogOpen={props.dialogOpen}
            onClose={props.onClose}
            okClicked={props.okClicked}
            dialogTitle={props.dialogTitle}
            dialogContentText={props.dialogContentText}>
            <Select
                onChange={props.onSelectChange}
                value={props.selectInitialValue}
            >
                { Object.keys(props.selectData).map(key => {
                    return (<MenuItem key={key} value={key}>{props.selectData[key]}</MenuItem>);
                }) }
            </Select>
            <TextField
                autoFocus
                margin='dense'
                id={props.textBoxLabel}
                label={props.textBoxLabel}
                value={props.textBoxValue}
                fullWidth
                onChange={props.onTextFieldChange}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        props.okClicked();
                    }
                }}
            />
        </AbstractDialog>
    );
};
