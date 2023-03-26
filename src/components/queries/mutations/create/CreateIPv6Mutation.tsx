import { MutationTuple, useMutation } from '@apollo/client';
import { CreateIPv6Mutation, CreateIPv6MutationVariables } from '../../../../gql/graphql';
import { graphql } from '../../../../gql';

const MUTATION = graphql(/* GraphQL */`
    mutation CreateIPv6($id: ID!) {
        settings {
            createIpv6(id: $id) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type CreateIPv6MutationType = () => MutationTuple<CreateIPv6Mutation, CreateIPv6MutationVariables>;
export const useCreateIPv6Mutation: CreateIPv6MutationType = () => useMutation<CreateIPv6Mutation, CreateIPv6MutationVariables>(MUTATION);
