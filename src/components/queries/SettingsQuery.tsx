import gql from 'graphql-tag';
import { Settings, SettingsVariables } from '../../types/Settings';
import { QueryResult, useQuery } from '@apollo/client';

const QUERY = gql`
    query Settings($token: String!) {
        authentication {
            token(token: $token)
        }
        settings {
            defaultSubdomains
            ipv4
            ipv6
        }
    }
`;

type SettingsQueryResult = (variables: SettingsVariables) => QueryResult<Settings, SettingsVariables>;
export const useSettingsQuery: SettingsQueryResult = (variables: SettingsVariables) =>
    useQuery<Settings, SettingsVariables>(QUERY, { partialRefetch: true, variables });
