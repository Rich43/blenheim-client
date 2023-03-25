import { DeleteDefaultSubDomain, DeleteDefaultSubDomainVariables } from '../../../../types/DeleteDefaultSubDomain';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteDefaultSubDomain($index: Int!) {

        settings {
            deleteDefaultSubDomain(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type DeleteDefaultSubDomainMutationType = () => MutationTuple<DeleteDefaultSubDomain, DeleteDefaultSubDomainVariables>;
export const useDeleteDefaultSubDomainMutation: DeleteDefaultSubDomainMutationType =
    () => useMutation<DeleteDefaultSubDomain, DeleteDefaultSubDomainVariables>(MUTATION);
