import { UpdateSubDomainIPv6, UpdateSubDomainIPv6Variables } from '../../../../types/UpdateSubDomainIPv6';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateSubDomainIPv6($id: ID!, $index: Int!, $name: String!) {

        settings {
            updateSubDomainIpAddressV6(id: $id, index: $index, name: $name) {
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

type UpdateSubDomainIPv6MutationType = () => MutationTuple<UpdateSubDomainIPv6, UpdateSubDomainIPv6Variables>;
export const useUpdateSubDomainIPv6Mutation: UpdateSubDomainIPv6MutationType =
    () => useMutation<UpdateSubDomainIPv6, UpdateSubDomainIPv6Variables>(MUTATION);
