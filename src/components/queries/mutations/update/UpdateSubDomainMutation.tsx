import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { UpdateSubDomainMutation, UpdateSubDomainMutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation UpdateSubDomain($id: ID!, $index: Int!, $name: String!) {

        settings {
            updateSubDomain(id: $id, index: $index, name: $name) {
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

type UpdateSubDomainMutationType = () => MutationTuple<UpdateSubDomainMutation, UpdateSubDomainMutationVariables>;
export const useUpdateSubDomainMutation: UpdateSubDomainMutationType =
    () => useMutation<UpdateSubDomainMutation, UpdateSubDomainMutationVariables>(MUTATION);
