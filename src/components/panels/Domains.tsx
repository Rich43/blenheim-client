import React, { FunctionComponent } from 'react';
import { DOMAINS } from '../../App';
import { DomainsList } from './DomainsList';
import { useDomainsQuery } from '../queries/DomainsQuery';
import { DashboardCard } from './generic/DashboardCard';

export const Domains: FunctionComponent = () => {
    const domains = useDomainsQuery();
    const domainsSettings = domains.data && domains.data.settings;

    if (domains.loading || !domainsSettings) {
        return (<span>Loading...</span>);
    }

    let rowCount = 0;
    return (
        <DashboardCard
            title='Domains (First 5)'
            linkText='Configure domains'
            redirectURL={DOMAINS}
            renderListItem={() => {
                const domainsList = (
                    <>
                        <DomainsList
                            domainsSettings={domainsSettings}
                            domainIndex={rowCount}
                        />
                    </>
                );
                rowCount += 1;
                return domainsList;
            }}
            list={domainsSettings.domains.map(item => item.id)}
        />
    );
};
