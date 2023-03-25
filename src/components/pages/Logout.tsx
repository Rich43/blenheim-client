import React, { useContext } from 'react';
import { StoreProvider } from '../../StoreProvider';
import { redirect } from 'react-router-dom';
import { ROOT } from '../../App';

export const Logout: React.FC = (): JSX.Element => {
    const store = useContext(StoreProvider);
    store.user = '';
    store.token = '';
    redirect(ROOT);
    return (<></>);
};
