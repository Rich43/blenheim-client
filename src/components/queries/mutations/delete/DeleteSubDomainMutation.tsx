import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { DeleteSubDomainMutation, DeleteSubDomainMutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation DeleteSubDomain($id: ID!, $index: Int!) {
        settings {
            deleteSubDomain(id: $id, index: $index) {
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

type DeleteSubDomainMutationType = () => MutationTuple<DeleteSubDomainMutation, DeleteSubDomainMutationVariables>;
export const useDeleteSubDomainMutation: DeleteSubDomainMutationType =
    () => useMutation<DeleteSubDomainMutation, DeleteSubDomainMutationVariables>(MUTATION);
