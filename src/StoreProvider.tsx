/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { createContext } from 'react';
import { computed, observable, makeObservable } from 'mobx';

function nullCheck(str: string | null): string {
    return !str ? '' : str;
}

export class Store {
    store = {
        authentication: {
            token: window.sessionStorage.getItem('token'),
            user: window.sessionStorage.getItem('user')
        }
    };

    constructor() {
        makeObservable(this, {
            store: observable,
            token: computed
        });
    }

    get token(): string {
        return nullCheck(this.store.authentication.token);
    }

    set token(value: string) {
        this.store.authentication.token = value;
        window.sessionStorage.setItem('token', value);
    }

    get user(): string {
        return nullCheck(this.store.authentication.user);
    }

    set user(value: string) {
        this.store.authentication.user = value;
        window.sessionStorage.setItem('user', value);
    }
}

export const StoreProvider = createContext(new Store());
