import gql from 'graphql-tag';
import { AddDomain, AddDomainVariables } from '../../../../types/AddDomain';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation AddDomain($token: String!, $id: ID!) {
        authentication {
            token(token: $token)
        }
        settings {
            createDomain(id: $id, subdomains: []) {
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

export const useCreateDomainMutation = () => useMutation<AddDomain, AddDomainVariables>(MUTATION);
