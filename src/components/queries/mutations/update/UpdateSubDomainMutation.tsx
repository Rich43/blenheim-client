import { UpdateSubDomain, UpdateSubDomainVariables } from '../../../../types/UpdateSubDomain';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateSubDomain($id: ID!, $index: Int!, $name: String!) {

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
