import { graphql } from '../../gql';

export const LOGIN_QUERY = graphql(/* GraphQL */`
    query Login($username: String!, $password: String!) {
        authentication {
            login(details: {name: $username, password: $password})
        }
    }
`);
