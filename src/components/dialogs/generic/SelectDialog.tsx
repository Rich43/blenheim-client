import React, { FunctionComponent } from 'react';
import { AbstractDialog, AbstractDialogProps } from './AbstractDialog';
import { MenuItem, Select } from '@mui/material';
import { SelectInputProps } from '@mui/material/Select/SelectInput';

interface SelectDialogProps extends AbstractDialogProps {
    selectData: {[key: string]: string}
    initialValue: unknown;
    onChange: SelectInputProps['onChange'];
}

export const SelectDialog: FunctionComponent<SelectDialogProps> = (props) => {
    return (
        <AbstractDialog
            dialogOpen={props.dialogOpen}
            onClose={props.onClose}
            okClicked={props.okClicked}
            dialogTitle={props.dialogTitle}
            dialogContentText={props.dialogContentText}>
            <Select
                onChange={props.onChange}
                value={props.initialValue}
            >
                { Object.keys(props.selectData).map(key => {
                    return (<MenuItem value={key}>{ props.selectData[key] }</MenuItem>);
                }) }
            </Select>
        </AbstractDialog>
    );
};
