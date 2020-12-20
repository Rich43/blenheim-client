import gql from 'graphql-tag';
import { UpdateSubDomain, UpdateSubDomainVariables } from '../../../../types/UpdateSubDomain';
import { MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateSubDomain($token: String!, $id: ID!, $index: Int!, $name: String!) {
        authentication {
            token(token: $token)
        }
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
`;

type UpdateSubDomainMutationType = () => MutationTuple<UpdateSubDomain, UpdateSubDomainVariables>;
export const useUpdateSubDomainMutation: UpdateSubDomainMutationType =
    () => useMutation<UpdateSubDomain, UpdateSubDomainVariables>(MUTATION);
