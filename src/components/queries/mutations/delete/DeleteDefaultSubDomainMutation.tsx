import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { DeleteDefaultSubDomainMutation, DeleteDefaultSubDomainMutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation DeleteDefaultSubDomain($index: Int!) {
        settings {
            deleteDefaultSubDomain(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type DeleteDefaultSubDomainMutationType = () => MutationTuple<DeleteDefaultSubDomainMutation, DeleteDefaultSubDomainMutationVariables>;
export const useDeleteDefaultSubDomainMutation: DeleteDefaultSubDomainMutationType =
    () => useMutation<DeleteDefaultSubDomainMutation, DeleteDefaultSubDomainMutationVariables>(MUTATION);
