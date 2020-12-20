import gql from 'graphql-tag';
import { UpdateDefaultSubDomain, UpdateDefaultSubDomainVariables } from '../../../../types/UpdateDefaultSubDomain';
import { MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateDefaultSubDomain($token: String!, $id: ID!, $index: Int!) {
        authentication {
            token(token: $token)
        }
        settings {
            updateDefaultSubDomain(id: $id, index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type UpdateDefaultSubDomainMutationType = () => MutationTuple<UpdateDefaultSubDomain, UpdateDefaultSubDomainVariables>;
export const useUpdateDefaultSubDomainMutation: UpdateDefaultSubDomainMutationType =
    () => useMutation<UpdateDefaultSubDomain, UpdateDefaultSubDomainVariables>(MUTATION);
