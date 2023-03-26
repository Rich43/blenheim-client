import React, { FunctionComponent } from 'react';
import { SETTINGS } from '../../App';
import { useSettingsQuery } from '../queries/SettingsQuery';
import { DashboardCard } from './generic/DashboardCard';
import { ListItemText } from '@mui/material';

export const DefaultSubDomains: FunctionComponent = () => {
    const settings = useSettingsQuery({});

    if (settings.loading || !settings.data) {
        return (<span>Loading...</span>);
    }

    return (
        <DashboardCard
            title='Default Sub Domains (First 5)'
            linkText='Configure settings'
            redirectURL={SETTINGS}
            renderListItem={subdomain => (<ListItemText>{subdomain}</ListItemText>)}
            list={settings.data.settings.defaultSubdomains}
        />
    );
};
