import { MutationTuple, useMutation } from '@apollo/client';
import { graphql } from '../../../../gql';
import { UpdateSubDomainIPv4Mutation, UpdateSubDomainIPv4MutationVariables } from '../../../../gql/graphql';

const MUTATION = graphql(/* GraphQL */`
    mutation UpdateSubDomainIPv4($id: ID!, $index: Int!, $name: String!) {
        settings {
            updateSubDomainIpAddressV4(id: $id, index: $index, name: $name) {
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

type UpdateSubDomainIPv4MutationType = () => MutationTuple<UpdateSubDomainIPv4Mutation, UpdateSubDomainIPv4MutationVariables>;
export const useUpdateSubDomainIPv4Mutation: UpdateSubDomainIPv4MutationType =
    () => useMutation<UpdateSubDomainIPv4Mutation, UpdateSubDomainIPv4MutationVariables>(MUTATION);
