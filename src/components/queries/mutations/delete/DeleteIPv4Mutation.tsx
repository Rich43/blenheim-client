import { DeleteIPv4, DeleteIPv4Variables } from '../../../../types/DeleteIPv4';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteIPv4($index: Int!) {

        settings {
            deleteIpv4(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type DeleteIPv4Mutation = () => MutationTuple<DeleteIPv4, DeleteIPv4Variables>;
export const useDeleteIPv4Mutation: DeleteIPv4Mutation = () => useMutation<DeleteIPv4, DeleteIPv4Variables>(MUTATION);
