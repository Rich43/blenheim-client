import gql from 'graphql-tag';
import { Settings, SettingsVariables } from '../../types/Settings';
import { useQuery } from '@apollo/client';

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

export const useSettingsQuery = (variables: SettingsVariables) =>
    useQuery<Settings, SettingsVariables>(QUERY, { partialRefetch: true, variables });
