import { MutableList } from '../generic/MutableList';
import React, { FunctionComponent } from 'react';
import { useSettingsQuery } from '../../queries/SettingsQuery';
import { useCreateIPv6Mutation } from '../../queries/mutations/create/CreateIPv6Mutation';
import { useUpdateIPv6Mutation } from '../../queries/mutations/update/UpdateIPv6Mutation';
import { useDeleteIPv6Mutation } from '../../queries/mutations/delete/DeleteIPv6Mutation';

export const IPv6MutableList: FunctionComponent = () => {
    const settings = useSettingsQuery({});
    const [createIPv6] = useCreateIPv6Mutation();
    const [updateIPv6] = useUpdateIPv6Mutation();
    const [deleteIPv6] = useDeleteIPv6Mutation();

    if (settings.loading) {
        return (
            <span>Loading...</span>
        );
    }

    return (
        <MutableList
            subheaderText='IPv6 Addresses'
            placeholderText='Enter a new IPv6 Address'
            listItems={(settings.data && settings.data.settings.ipv6) || []}
            dialogContentText='Edit the IPv6 Address in the text box below:'
            dialogTextBoxLabel='Enter a new IPv6 Address'
            dialogTitle='Editing %s'
            onCreate={id => createIPv6({
                variables: {
                    id
                }
            })}
            onUpdate={(id, index) => updateIPv6({
                variables: {
                    id,
                    index
                }
            })}
            onDelete={index => deleteIPv6({
                variables: {
                    index
                }
            })}
        />
    );
};
