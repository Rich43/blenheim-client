import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = (token: string) => {
    let headers = {};
    if (token) {
        headers = {
            Authorization: token
        };
    }
    return new ApolloClient({
        headers,
        uri: '/graphql',
        cache: new InMemoryCache()
    });
};
