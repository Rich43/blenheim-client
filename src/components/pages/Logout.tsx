import React, { useContext } from 'react';
import { UserDispatchContext } from '../../userStoreProvider';
import { useNavigate } from 'react-router-dom';
import { ROOT } from '../../App';

export const Logout: React.FC = (): JSX.Element => {
    const dispatch = useContext(UserDispatchContext);
    const navigate = useNavigate();
    if (dispatch) {
        dispatch({type: 'user', payload: ''});
        dispatch({type: 'token', payload: ''});
        navigate(ROOT);
    }
    return (<></>);
};
