import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
    query Login($username: String!, $password: String!) {
        authentication {
            login(details: {name: $username, password: $password})
        }
    }
`;
