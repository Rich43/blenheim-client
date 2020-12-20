import gql from 'graphql-tag';
import { CreateDefaultSubDomain, CreateDefaultSubDomainVariables } from '../../../../types/CreateDefaultSubDomain';
import { useMutation } from '@apollo/client';

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

export const useCreateDefaultSubDomainMutation = () => useMutation<CreateDefaultSubDomain, CreateDefaultSubDomainVariables>(MUTATION);
