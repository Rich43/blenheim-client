import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { SubdomainMutation, SubdomainMutationVariables } from '../../../../gql/graphql';

export const MUTATION = graphql(/* GraphQL */`
    mutation Subdomain($id: ID!, $name: String!) {
        settings {
            createSubDomain(id: $id, name: $name) {
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

type CreateSubDomainMutationType = () => MutationTuple<SubdomainMutation, SubdomainMutationVariables>;
export const useCreateSubDomainMutation: CreateSubDomainMutationType = () => useMutation<SubdomainMutation, SubdomainMutationVariables>(MUTATION);
