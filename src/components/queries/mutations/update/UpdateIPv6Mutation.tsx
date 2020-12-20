import gql from 'graphql-tag';
import { UpdateIPv6, UpdateIPv6Variables } from '../../../../types/UpdateIPv6';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateIPv6($token: String!, $id: ID!, $index: Int!) {
        authentication {
            token(token: $token)
        }
        settings {
            updateIpv6(id: $id, index: $index) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

export const useUpdateIPv6Mutation = () => useMutation<UpdateIPv6, UpdateIPv6Variables>(MUTATION);
