import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { DeleteIPv6MutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation DeleteIPv6($index: Int!) {
        settings {
            deleteIpv6(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type DeleteIPv6Mutation = () => MutationTuple<DeleteIPv6Mutation, DeleteIPv6MutationVariables>;
export const useDeleteIPv6Mutation: DeleteIPv6Mutation = () => useMutation<DeleteIPv6Mutation, DeleteIPv6MutationVariables>(MUTATION);
