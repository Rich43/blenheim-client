import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { UpdateDefaultSubDomainMutation, UpdateDefaultSubDomainMutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation UpdateDefaultSubDomain($id: ID!, $index: Int!) {
        settings {
            updateDefaultSubDomain(id: $id, index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`);

type UpdateDefaultSubDomainMutationType = () => MutationTuple<UpdateDefaultSubDomainMutation, UpdateDefaultSubDomainMutationVariables>;
export const useUpdateDefaultSubDomainMutation: UpdateDefaultSubDomainMutationType =
    () => useMutation<UpdateDefaultSubDomainMutation, UpdateDefaultSubDomainMutationVariables>(MUTATION);
