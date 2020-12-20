import gql from 'graphql-tag';
import { CreateIPv4, CreateIPv4Variables } from '../../../../types/CreateIPv4';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation CreateIPv4($token: String!, $id: ID!) {
        authentication {
            token(token: $token)
        }
        settings {
            createIpv4(id: $id) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

export const useCreateIPv4Mutation = () => useMutation<CreateIPv4, CreateIPv4Variables>(MUTATION);
