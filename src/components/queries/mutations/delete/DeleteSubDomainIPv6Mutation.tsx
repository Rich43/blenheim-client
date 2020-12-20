import gql from 'graphql-tag';
import { DeleteSubDomainIPv6, DeleteSubDomainIPv6Variables } from '../../../../types/DeleteSubDomainIPv6';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteSubDomainIPv6($token: String!, $id: ID!, $index: Int!) {
        authentication {
            token(token: $token)
        }
        settings {
            deleteSubDomainIpAddressV6(id: $id, index: $index) {
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

export const useDeleteSubDomainIPv6Mutation = () => useMutation<DeleteSubDomainIPv6, DeleteSubDomainIPv6Variables>(MUTATION);
