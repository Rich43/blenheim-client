import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { UpdateIPv6Mutation, UpdateIPv6MutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation UpdateIPv6($id: ID!, $index: Int!) {
        settings {
            updateIpv6(id: $id, index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type UpdateIPv6MutationType = () => MutationTuple<UpdateIPv6Mutation, UpdateIPv6MutationVariables>;
export const useUpdateIPv6Mutation: UpdateIPv6MutationType = () => useMutation<UpdateIPv6Mutation, UpdateIPv6MutationVariables>(MUTATION);
