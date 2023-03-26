import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { UpdateDomainMutation, UpdateDomainMutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation UpdateDomain($id: ID!, $newName: String!) {
        settings {
            updateDomain(id: $id, newName: $newName) {
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

type UpdateDomainMutationType = () => MutationTuple<UpdateDomainMutation, UpdateDomainMutationVariables>;
export const useUpdateDomainMutation: UpdateDomainMutationType =
    () => useMutation<UpdateDomainMutation, UpdateDomainMutationVariables>(MUTATION);
