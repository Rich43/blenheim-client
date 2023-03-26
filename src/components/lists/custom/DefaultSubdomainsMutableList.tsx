import { MutableList } from '../generic/MutableList';
import React, { FunctionComponent } from 'react';
import { useSettingsQuery } from '../../queries/SettingsQuery';
import { useCreateDefaultSubDomainMutation } from '../../queries/mutations/create/CreateDefaultSubDomainMutation';
import { useUpdateDefaultSubDomainMutation } from '../../queries/mutations/update/UpdateDefaultSubDomainMutation';
import { useDeleteDefaultSubDomainMutation } from '../../queries/mutations/delete/DeleteDefaultSubDomainMutation';

export const DefaultSubdomainsMutableList: FunctionComponent = () => {
    const settings = useSettingsQuery({});
    const [createDefaultSubDomain] = useCreateDefaultSubDomainMutation();
    const [updateDefaultSubDomain] = useUpdateDefaultSubDomainMutation();
    const [deleteDefaultSubDomain] = useDeleteDefaultSubDomainMutation();

    if (settings.loading) {
        return (
            <span>Loading...</span>
        );
    }

    return (
        <MutableList
            subheaderText='Default subdomains'
            placeholderText='Enter a new default subdomain'
            listItems={(settings.data && settings.data.settings.defaultSubdomains) || []}
            dialogContentText='Edit the default subdomain in the text box below:'
            dialogTextBoxLabel='Enter a new default subdomain'
            dialogTitle='Editing %s'
            onCreate={id => createDefaultSubDomain({
                variables: {
                    id
                }
            })}
            onUpdate={(id, index) => updateDefaultSubDomain({
                variables: {
                    id,
                    index
                }
            })}
            onDelete={index => deleteDefaultSubDomain({
                variables: {
                    index
                }
            })}
        />
    );
};
