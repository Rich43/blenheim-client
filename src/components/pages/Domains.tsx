import React, { FunctionComponent, useContext } from 'react';
import { useDomainsQuery } from '../queries/DomainsQuery';
import { DomainsList } from '../lists/custom/DomainsList';
import { StoreProvider } from '../../StoreProvider';
import { CreateDomainDialog } from '../dialogs/custom/CreateDomainDialog';
import { DeleteDomainDialog } from '../dialogs/custom/DeleteDomainDialog';
import { UpdateDomainDialog } from '../dialogs/custom/UpdateDomainDialog';
import { Fab, List, ListSubheader, Menu, MenuItem } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

export const Domains: FunctionComponent = () => {
    const classes: { [key: string]: React.CSSProperties } = {
        fab: {
            position: 'fixed',
            bottom: 4,
            right: 4
        }
    };
    const store = useContext(StoreProvider);
    const [menuEl, setMenuEl] = React.useState<null | HTMLElement>(null);
    const id = menuEl ? 'domain-menu' : undefined;
    const domains = useDomainsQuery({token: store.token});
    const domainsSettings = domains.data && domains.data.settings;
    const domainsSettingsDomains = (domainsSettings && domainsSettings.domains) || null;
    const [addDomainDialogOpen, setAddDomainDialogOpen] = React.useState<boolean>(false);
    const [editDomainDialogOpen, setEditDomainDialogOpen] = React.useState<boolean>(false);
    const [deleteDomainDialogOpen, setDeleteDomainDialogOpen] = React.useState<boolean>(false);
    if (domains.loading) {
        return (<span>Loading...</span>);
    }
    let count = 0;
    return (
        <>
            <List subheader={
                <ListSubheader disableSticky={true}>
                    Domains and Subdomains
                </ListSubheader>
            }>
                {domainsSettings && domainsSettingsDomains && domainsSettingsDomains.map(domain => {
                    const domainsList = (<><DomainsList domainsSettings={domainsSettings} domainIndex={count}/></>);
                    if (domain) {
                        count += 1;
                        return domainsList;
                    } else {
                        return (<></>);
                    }
                })}
            </List>

            <Fab style={classes.fab} color="secondary" onClick={event => setMenuEl(event.currentTarget)}>
                <MoreVert/>
            </Fab>

            <Menu
                id={id}
                anchorEl={menuEl}
                open={Boolean(menuEl)}
                onClose={() => setMenuEl(null)}
                anchorOrigin={{
                    vertical: -24,
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            >
                <MenuItem onClick={() => {
                    setMenuEl(null);
                    setAddDomainDialogOpen(true);
                }}>Add Domain</MenuItem>
                <MenuItem onClick={() => {
                    setMenuEl(null);
                    setEditDomainDialogOpen(true);
                }}>Edit Domain</MenuItem>
                <MenuItem onClick={() => {
                    setMenuEl(null);
                    setDeleteDomainDialogOpen(true);
                }}>Remove Domain</MenuItem>
            </Menu>
            <CreateDomainDialog dialogOpen={addDomainDialogOpen} onClose={() => setAddDomainDialogOpen(false)}/>
            <UpdateDomainDialog dialogOpen={editDomainDialogOpen} onClose={() => setEditDomainDialogOpen(false)}
                                domains={domainsSettingsDomains}/>
            <DeleteDomainDialog dialogOpen={deleteDomainDialogOpen} onClose={() => setDeleteDomainDialogOpen(false)}
                                domains={domainsSettingsDomains}/>
        </>
    );
};
