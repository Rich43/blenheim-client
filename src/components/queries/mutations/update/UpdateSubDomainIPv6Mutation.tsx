import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { UpdateSubDomainIPv6Mutation, UpdateSubDomainIPv6MutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation UpdateSubDomainIPv6($id: ID!, $index: Int!, $name: String!) {
        settings {
            updateSubDomainIpAddressV6(id: $id, index: $index, name: $name) {
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

type UpdateSubDomainIPv6MutationType = () => MutationTuple<UpdateSubDomainIPv6Mutation, UpdateSubDomainIPv6MutationVariables>;
export const useUpdateSubDomainIPv6Mutation: UpdateSubDomainIPv6MutationType =
    () => useMutation<UpdateSubDomainIPv6Mutation, UpdateSubDomainIPv6MutationVariables>(MUTATION);
