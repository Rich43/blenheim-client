import React, { useContext } from 'react';
import { StoreProvider } from '../../StoreProvider';
import { useHistory } from 'react-router-dom';

export const Logout: React.FC = (): JSX.Element => {
    const history = useHistory();
    const store = useContext(StoreProvider);
    store.user = '';
    store.token = '';
    history.push('/');
    return (<></>);
};
