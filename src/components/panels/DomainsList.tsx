import React, { FunctionComponent } from 'react';
import { DomainsListProps } from '../common';
import { ListItem } from '@mui/material';

export const DomainsList: FunctionComponent<DomainsListProps> =
    ({
        domainsSettings,
        domainIndex
    }) => {
        return (<ListItem key={domainIndex}>{domainsSettings.domains[domainIndex].id}</ListItem>);
    };
