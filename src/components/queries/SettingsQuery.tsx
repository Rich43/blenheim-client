import { Settings, SettingsVariables } from '../../types/Settings';
import { gql, QueryResult, useQuery } from '@apollo/client';

const QUERY = gql`
    query Settings {
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
