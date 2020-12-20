import gql from 'graphql-tag';

export const LOGIN_QUERY = gql`
    query Login($username: String!, $password: String!) {
        authentication {
            login(details: {name: $username, password: $password})
        }
    }
`;
