import { MutationTuple, useMutation } from '@apollo/client';
import { DeleteIPv4MutationVariables } from '../../../../gql/graphql';
import { graphql } from '../../../../gql';

const MUTATION = graphql(/* GraphQL */`
    mutation DeleteIPv4($index: Int!) {
        settings {
            deleteIpv4(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type DeleteIPv4Mutation = () => MutationTuple<DeleteIPv4Mutation, DeleteIPv4MutationVariables>;
export const useDeleteIPv4Mutation: DeleteIPv4Mutation = () => useMutation<DeleteIPv4Mutation, DeleteIPv4MutationVariables>(MUTATION);
