import gql from 'graphql-tag';
import { DeleteIPv6, DeleteIPv6Variables } from '../../../../types/DeleteIPv6';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation DeleteIPv6($token: String!, $index: Int!) {
        authentication {
            token(token: $token)
        }
        settings {
            deleteIpv6(index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

export const useDeleteIPv6Mutation = () => useMutation<DeleteIPv6, DeleteIPv6Variables>(MUTATION);
