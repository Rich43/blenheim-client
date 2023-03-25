import { UpdateDefaultSubDomain, UpdateDefaultSubDomainVariables } from '../../../../types/UpdateDefaultSubDomain';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateDefaultSubDomain($id: ID!, $index: Int!) {

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
