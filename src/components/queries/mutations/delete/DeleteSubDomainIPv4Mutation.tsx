import gql from 'graphql-tag';
import { DeleteSubDomainIPv4, DeleteSubDomainIPv4Variables } from '../../../../types/DeleteSubDomainIPv4';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteSubDomainIPv4($token: String!, $id: ID!, $index: Int!) {
        authentication {
            token(token: $token)
        }
        settings {
            deleteSubDomainIpAddressV4(id: $id, index: $index) {
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

export const useDeleteSubDomainIPv4Mutation = () => useMutation<DeleteSubDomainIPv4, DeleteSubDomainIPv4Variables>(MUTATION);
