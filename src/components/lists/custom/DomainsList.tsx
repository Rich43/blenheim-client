import React, { FunctionComponent, useState } from 'react';
import { DomainsListProps } from '../../common';
import { CreateSubDomainDialog } from '../../dialogs/custom/CreateSubDomainDialog';
import { SubDomainListItem } from './SubDomainListItem';
import { IPInfo } from './IPInfo';
import { Button, Collapse, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const DomainsList: FunctionComponent<DomainsListProps> =
    ({
        domainsSettings,
        domainIndex
    }) => {
        let defaultSubDomainCount = 0;
        let subDomainCount = 0;
        const domainsSettingsDomain = domainsSettings.domains[domainIndex];
        const name = domainsSettingsDomain ? domainsSettingsDomain.id ? domainsSettingsDomain.id : '' : '';
        const [open, setOpen] = useState<boolean>(false);

        return (
            <>
                <ListItem key={`li${domainIndex}`}>
                    <ListItemText key={`lit${domainIndex}`}>
                        <Button key={domainIndex} onClick={() => setOpen(!open)}>{name}</Button>
                    </ListItemText>
                    <CreateSubDomainDialog key={domainIndex} domainName={name}/>
                    <IconButton onClick={() => setOpen(!open)} key={`ib2${domainIndex}`}>
                        {open ? <ExpandLess key={domainIndex}/> : <ExpandMore key={domainIndex}/>}
                    </IconButton>
                </ListItem>

                <Collapse in={open} timeout='auto' key={`col${domainIndex}`} unmountOnExit>
                    <List component='div' disablePadding key={`lst${domainIndex}`}>
                        {
                            domainsSettings.defaultSubdomains && domainsSettings.defaultSubdomains.map((subdomain: any) => {
                                const listItem = <><ListItem key={`innerLi${defaultSubDomainCount}`}>
                                    <ListItemText
                                        key={`innerLit${defaultSubDomainCount}`}>{subdomain}</ListItemText>
                                    <IPInfo key={domainIndex} domainsSettings={domainsSettings}/>
                                    <Typography key={domainIndex}>Default Subdomain</Typography>
                                </ListItem></>;
                                defaultSubDomainCount++;
                                return listItem;
                            })
                        }
                        {
                            domainsSettingsDomain.subdomains && domainsSettingsDomain.subdomains.map((subdomain: any) => {
                                const subDomainListItem = (
                                    <>
                                        <SubDomainListItem
                                            key={domainIndex}
                                            domain={name}
                                            subdomain={subdomain.id}
                                            domainsSettings={domainsSettings}
                                            domainIndex={domainIndex}
                                            subdomainIndex={subDomainCount}
                                        />
                                    </>
                                );
                                subDomainCount++;
                                return subDomainListItem;
                            })
                        }
                    </List>
                </Collapse>
            </>
        );
    };
