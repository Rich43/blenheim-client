import { UpdateDomain, UpdateDomainVariables } from '../../../../types/UpdateDomain';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateDomain($id: ID!, $newName: String!) {

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
