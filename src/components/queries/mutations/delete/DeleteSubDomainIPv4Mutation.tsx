import gql from 'graphql-tag';
import { DeleteSubDomainIPv4, DeleteSubDomainIPv4Variables } from '../../../../types/DeleteSubDomainIPv4';
import { MutationTuple, useMutation } from '@apollo/client';

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

type DeleteSubDomainIPv4MutationType = () => MutationTuple<DeleteSubDomainIPv4, DeleteSubDomainIPv4Variables>;
export const useDeleteSubDomainIPv4Mutation: DeleteSubDomainIPv4MutationType =
    () => useMutation<DeleteSubDomainIPv4, DeleteSubDomainIPv4Variables>(MUTATION);
