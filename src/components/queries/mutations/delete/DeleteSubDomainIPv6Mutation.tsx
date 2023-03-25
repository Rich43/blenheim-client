import { DeleteSubDomainIPv6, DeleteSubDomainIPv6Variables } from '../../../../types/DeleteSubDomainIPv6';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteSubDomainIPv6($id: ID!, $index: Int!) {

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

type DeleteSubDomainIPv6MutationType = () => MutationTuple<DeleteSubDomainIPv6, DeleteSubDomainIPv6Variables>;
export const useDeleteSubDomainIPv6Mutation: DeleteSubDomainIPv6MutationType =
    () => useMutation<DeleteSubDomainIPv6, DeleteSubDomainIPv6Variables>(MUTATION);
