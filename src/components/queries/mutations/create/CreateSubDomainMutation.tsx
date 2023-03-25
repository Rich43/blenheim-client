import { Subdomain, SubdomainVariables } from '../../../../types/Subdomain';
import { gql, MutationTuple, useMutation } from '@apollo/client';

export const MUTATION = gql`
    mutation Subdomain($id: ID!, $name: String!) {

        settings {
            createSubDomain(id: $id, name: $name) {
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

type CreateSubDomainMutationType = () => MutationTuple<Subdomain, SubdomainVariables>;
export const useCreateSubDomainMutation: CreateSubDomainMutationType = () => useMutation<Subdomain, SubdomainVariables>(MUTATION);
