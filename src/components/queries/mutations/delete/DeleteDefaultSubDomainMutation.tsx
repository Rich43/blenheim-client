import gql from 'graphql-tag';
import { DeleteDefaultSubDomain, DeleteDefaultSubDomainVariables } from '../../../../types/DeleteDefaultSubDomain';
import { MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteDefaultSubDomain($token: String!, $index: Int!) {
        authentication {
            token(token: $token)
        }
        settings {
            deleteDefaultSubDomain(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type DeleteDefaultSubDomainMutationType = () => MutationTuple<DeleteDefaultSubDomain, DeleteDefaultSubDomainVariables>;
export const useDeleteDefaultSubDomainMutation: DeleteDefaultSubDomainMutationType =
    () => useMutation<DeleteDefaultSubDomain, DeleteDefaultSubDomainVariables>(MUTATION);
