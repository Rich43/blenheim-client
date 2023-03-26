import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { DeleteDomainMutation, DeleteDomainMutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation DeleteDomain($id: ID!) {
        settings {
            deleteDomain(id: $id) {
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

type DeleteDomainMutationType = () => MutationTuple<DeleteDomainMutation, DeleteDomainMutationVariables>;
export const useDeleteDomainMutation: DeleteDomainMutationType = () => useMutation<DeleteDomainMutation, DeleteDomainMutationVariables>(MUTATION);
