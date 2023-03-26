import React, { FunctionComponent } from 'react';
import { SelectDialog } from '../generic/SelectDialog';
import { useDeleteDomainMutation } from '../../queries/mutations/delete/DeleteDomainMutation';
import { updateDomainsCache } from '../../queries/DomainsQuery';
import { createDomainMap, DomainsArray } from '../../common';

export const DeleteDomainDialog: FunctionComponent<{
    dialogOpen: boolean;
    onClose: () => void;
    domains: DomainsArray
}> = ({ dialogOpen, onClose, domains }) => {
    const [value, setValue] = React.useState<unknown>(null);
    const [deleteDomain] = useDeleteDomainMutation();
    const { domainMap, firstDomain } = createDomainMap(domains);

    if (firstDomain && !value) {
        setValue(firstDomain);
    }

    return (
        <SelectDialog
            dialogOpen={dialogOpen}
            onClose={onClose}
            okClicked={() => {
                deleteDomain(
                    {
                        variables: {id: String(value)},
                        update: updateDomainsCache('deleteDomain')
                    }
                ).then();
                setValue(null);
            }}
            onChange={event => setValue(event.target.value)}
            initialValue={value}
            dialogTitle='Delete domain'
            dialogContentText='Use the dropdown list below to select a domain to delete'
            selectData={domainMap}
        />
    );
};
