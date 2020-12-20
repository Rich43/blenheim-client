import gql from 'graphql-tag';
import { DeleteDomain, DeleteDomainVariables } from '../../../../types/DeleteDomain';
import { MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteDomain($token: String!, $id: ID!) {
        authentication {
            token(token: $token)
        }
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
`;

type DeleteDomainMutationType = () => MutationTuple<DeleteDomain, DeleteDomainVariables>;
export const useDeleteDomainMutation: DeleteDomainMutationType = () => useMutation<DeleteDomain, DeleteDomainVariables>(MUTATION);
