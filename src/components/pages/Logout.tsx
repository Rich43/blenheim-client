import React, { useContext } from 'react';
import { UserDispatchContext } from '../../userStoreProvider';
import { redirect } from 'react-router-dom';
import { ROOT } from '../../App';

export const Logout: React.FC = (): JSX.Element => {
    const dispatch = useContext(UserDispatchContext);
    if (dispatch) {
        dispatch({type: 'user', payload: ''});
        dispatch({type: 'token', payload: ''});
        redirect(ROOT);
    }
    return (<></>);
};
