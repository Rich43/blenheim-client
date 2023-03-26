import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { CreateDefaultSubDomainMutation, CreateDefaultSubDomainMutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */ `
    mutation CreateDefaultSubDomain($id: ID!) {
        settings {
            createDefaultSubDomain(id: $id) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type CreateDefaultSubDomainMutationType = () =>
    MutationTuple<CreateDefaultSubDomainMutation, CreateDefaultSubDomainMutationVariables>;
export const useCreateDefaultSubDomainMutation: CreateDefaultSubDomainMutationType =
    () => useMutation<CreateDefaultSubDomainMutation, CreateDefaultSubDomainMutationVariables>(MUTATION);
