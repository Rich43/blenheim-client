import { QueryResult, useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import { SettingsQuery, SettingsQueryVariables } from '../../gql/graphql';

const QUERY = graphql(/* GraphQL */`
    query Settings {
        settings {
            defaultSubdomains
            ipv4
            ipv6
        }
    }
`);

type SettingsQueryResult = (variables: SettingsQueryVariables) => QueryResult<SettingsQuery, SettingsQueryVariables>;
export const useSettingsQuery: SettingsQueryResult = (variables: SettingsQueryVariables) =>
    useQuery<SettingsQuery, SettingsQueryVariables>(QUERY, {partialRefetch: true, variables});
