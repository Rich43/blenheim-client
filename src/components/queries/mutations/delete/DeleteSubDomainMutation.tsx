import gql from 'graphql-tag';
import { DeleteSubDomain, DeleteSubDomainVariables } from '../../../../types/DeleteSubDomain';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteSubDomain($token: String!, $id: ID!, $index: Int!) {
        authentication {
            token(token: $token)
        }
        settings {
            deleteSubDomain(id: $id, index: $index) {
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

export const useDeleteSubDomainMutation = () => useMutation<DeleteSubDomain, DeleteSubDomainVariables>(MUTATION);
