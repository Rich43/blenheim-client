import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { DeleteSubDomainIPv6Mutation, DeleteSubDomainIPv6MutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation DeleteSubDomainIPv6($id: ID!, $index: Int!) {
        settings {
            deleteSubDomainIpAddressV6(id: $id, index: $index) {
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

type DeleteSubDomainIPv6MutationType = () => MutationTuple<DeleteSubDomainIPv6Mutation, DeleteSubDomainIPv6MutationVariables>;
export const useDeleteSubDomainIPv6Mutation: DeleteSubDomainIPv6MutationType =
    () => useMutation<DeleteSubDomainIPv6Mutation, DeleteSubDomainIPv6MutationVariables>(MUTATION);
