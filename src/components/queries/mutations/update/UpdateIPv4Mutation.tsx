import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { UpdateIPv4Mutation, UpdateIPv4MutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation UpdateIPv4($id: ID!, $index: Int!) {
        settings {
            updateIpv4(id: $id, index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type UpdateIPv4MutationType = () => MutationTuple<UpdateIPv4Mutation, UpdateIPv4MutationVariables>;
export const useUpdateIPv4Mutation: UpdateIPv4MutationType = () => useMutation<UpdateIPv4Mutation, UpdateIPv4MutationVariables>(MUTATION);
