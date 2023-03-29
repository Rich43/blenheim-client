import { createContext, Dispatch } from 'react';

export interface UserContextType {
    user: string | null;
    token: string | null;
}

export interface Action {
    type: 'user' | 'token';
    payload: string | null;
}

export const userContextValue: UserContextType = {
    user: window.localStorage.getItem('user'),
    token: window.localStorage.getItem('token')
};

export const UserDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);
export const UserStateContext = createContext<UserContextType | undefined>(userContextValue);

export function reducer(state: UserContextType, action: Action) {
    if (action.type === 'user') {
        return {
            ...state,
            user: action.payload,
        };
    } else if (action.type === 'token') {
        return {
            ...state,
            token: action.payload,
        };
    }
    // throw Error('Unknown action.');
    return state;
}
