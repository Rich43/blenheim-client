import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { CreateDomainMutation, CreateDomainMutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation CreateDomain($id: ID!) {
        settings {
            createDomain(id: $id, subdomains: []) {
                id
                subdomains {
                    id
                    ipAddressV4
                    ipAddressV6
                }
            }
        }
    }
`);

type CreateDomainMutationType = () => MutationTuple<CreateDomainMutation, CreateDomainMutationVariables>;
export const useCreateDomainMutation: CreateDomainMutationType = () => useMutation<CreateDomainMutation, CreateDomainMutationVariables>(MUTATION);
