import { DeleteSubDomain, DeleteSubDomainVariables } from '../../../../types/DeleteSubDomain';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteSubDomain($id: ID!, $index: Int!) {

        settings {
            deleteSubDomain(id: $id, index: $index) {
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

type DeleteSubDomainMutationType = () => MutationTuple<DeleteSubDomain, DeleteSubDomainVariables>;
export const useDeleteSubDomainMutation: DeleteSubDomainMutationType =
    () => useMutation<DeleteSubDomain, DeleteSubDomainVariables>(MUTATION);
