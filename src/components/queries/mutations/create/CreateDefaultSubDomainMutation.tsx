import gql from 'graphql-tag';
import { CreateDefaultSubDomain, CreateDefaultSubDomainVariables } from '../../../../types/CreateDefaultSubDomain';
import { FetchResult, MutationResult, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation CreateDefaultSubDomain($token: String!, $id: ID!) {
        authentication {
            token(token: $token)
        }
        settings {
            createDefaultSubDomain(id: $id) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type CreateDefaultSubDomainMutationType = (variables: CreateDefaultSubDomain) =>
    MutationTuple<CreateDefaultSubDomain, CreateDefaultSubDomainVariables>;
export const useCreateDefaultSubDomainMutation: CreateDefaultSubDomainMutationType =
    () => useMutation<CreateDefaultSubDomain, CreateDefaultSubDomainVariables>(MUTATION);
