import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { CreateIPv4Mutation, CreateIPv4MutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation CreateIPv4($id: ID!) {
        settings {
            createIpv4(id: $id) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type CreateIPv4MutationType = () => MutationTuple<CreateIPv4Mutation, CreateIPv4MutationVariables>;
export const useCreateIPv4Mutation: CreateIPv4MutationType = () => useMutation<CreateIPv4Mutation, CreateIPv4MutationVariables>(MUTATION);
