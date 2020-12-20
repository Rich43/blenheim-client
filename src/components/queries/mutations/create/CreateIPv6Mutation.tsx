import gql from 'graphql-tag';
import { CreateIPv6, CreateIPv6Variables } from '../../../../types/CreateIPv6';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation CreateIPv6($token: String!, $id: ID!) {
        authentication {
            token(token: $token)
        }
        settings {
            createIpv6(id: $id) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

export const useCreateIPv6Mutation = () => useMutation<CreateIPv6, CreateIPv6Variables>(MUTATION);
