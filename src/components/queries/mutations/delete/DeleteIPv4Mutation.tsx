import gql from 'graphql-tag';
import { DeleteIPv4, DeleteIPv4Variables } from '../../../../types/DeleteIPv4';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteIPv4($token: String!, $index: Int!) {
        authentication {
            token(token: $token)
        }
        settings {
            deleteIpv4(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

export const useDeleteIPv4Mutation = () => useMutation<DeleteIPv4, DeleteIPv4Variables>(MUTATION);
