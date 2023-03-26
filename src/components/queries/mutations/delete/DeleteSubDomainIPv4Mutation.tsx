import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { DeleteSubDomainIPv4Mutation, DeleteSubDomainIPv4MutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation DeleteSubDomainIPv4($id: ID!, $index: Int!) {
        settings {
            deleteSubDomainIpAddressV4(id: $id, index: $index) {
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

type DeleteSubDomainIPv4MutationType = () => MutationTuple<DeleteSubDomainIPv4Mutation, DeleteSubDomainIPv4MutationVariables>;
export const useDeleteSubDomainIPv4Mutation: DeleteSubDomainIPv4MutationType =
    () => useMutation<DeleteSubDomainIPv4Mutation, DeleteSubDomainIPv4MutationVariables>(MUTATION);
