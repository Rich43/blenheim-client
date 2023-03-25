import { DeleteIPv6, DeleteIPv6Variables } from '../../../../types/DeleteIPv6';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteIPv6($index: Int!) {

        settings {
            deleteIpv6(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type DeleteIPv6Mutation = () => MutationTuple<DeleteIPv6, DeleteIPv6Variables>;
export const useDeleteIPv6Mutation: DeleteIPv6Mutation = () => useMutation<DeleteIPv6, DeleteIPv6Variables>(MUTATION);
