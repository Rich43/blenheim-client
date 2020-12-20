import gql from 'graphql-tag';
import { UpdateDomain, UpdateDomainVariables } from '../../../../types/UpdateDomain';
import { MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateDomain($token: String!, $id: ID!, $newName: String!) {
        authentication {
            token(token: $token)
        }
        settings {
            updateDomain(id: $id, newName: $newName) {
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

type UpdateDomainMutationType = () => MutationTuple<UpdateDomain, UpdateDomainVariables>;
export const useUpdateDomainMutation: UpdateDomainMutationType =
    () => useMutation<UpdateDomain, UpdateDomainVariables>(MUTATION);
