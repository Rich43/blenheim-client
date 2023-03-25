import { AddDomain, AddDomainVariables } from '../../../../types/AddDomain';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation AddDomain($id: ID!) {

        settings {
            createDomain(id: $id, subdomains: []) {
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

type CreateDomainMutationType = () => MutationTuple<AddDomain, AddDomainVariables>;
export const useCreateDomainMutation: CreateDomainMutationType = () => useMutation<AddDomain, AddDomainVariables>(MUTATION);
