import gql from 'graphql-tag';
import { UpdateDomain, UpdateDomainVariables } from '../../../../types/UpdateDomain';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateDomain($token: String!, $id: ID!, $newName: String!) {
        authentication {
            token(token: $token)
        }
        settings {
            updateDomain(id: $id, newName: $newName) {
                id
                subdomains {
                    id
                    ipAddressV4
                    ipAddressV6
                }
            }
        }
    }
`;

export const useUpdateDomainMutation = () => useMutation<UpdateDomain, UpdateDomainVariables>(MUTATION);
