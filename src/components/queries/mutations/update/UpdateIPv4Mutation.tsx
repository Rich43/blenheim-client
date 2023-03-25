import { UpdateIPv4, UpdateIPv4Variables } from '../../../../types/UpdateIPv4';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateIPv4($id: ID!, $index: Int!) {

        settings {
            updateIpv4(id: $id, index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type UpdateIPv4MutationType = () => MutationTuple<UpdateIPv4, UpdateIPv4Variables>;
export const useUpdateIPv4Mutation: UpdateIPv4MutationType = () => useMutation<UpdateIPv4, UpdateIPv4Variables>(MUTATION);
