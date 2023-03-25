import { UpdateIPv6, UpdateIPv6Variables } from '../../../../types/UpdateIPv6';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateIPv6($id: ID!, $index: Int!) {

        settings {
            updateIpv6(id: $id, index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type UpdateIPv6MutationType = () => MutationTuple<UpdateIPv6, UpdateIPv6Variables>;
export const useUpdateIPv6Mutation: UpdateIPv6MutationType = () => useMutation<UpdateIPv6, UpdateIPv6Variables>(MUTATION);
