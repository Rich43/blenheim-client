import gql from 'graphql-tag';
import { Subdomain, SubdomainVariables } from '../../../../types/Subdomain';
import { MutationTuple, useMutation } from '@apollo/client';

export const MUTATION = gql`
    mutation Subdomain($id: ID!, $name: String!, $token: String!) {
        authentication {
            token(token: $token)
        }
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
