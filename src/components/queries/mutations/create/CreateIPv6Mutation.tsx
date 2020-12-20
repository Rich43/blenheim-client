import gql from 'graphql-tag';
import { CreateIPv6, CreateIPv6Variables } from '../../../../types/CreateIPv6';
import { MutationTuple, useMutation } from '@apollo/client';

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

type CreateIPv6MutationType = () => MutationTuple<CreateIPv6, CreateIPv6Variables>;
export const useCreateIPv6Mutation: CreateIPv6MutationType = () => useMutation<CreateIPv6, CreateIPv6Variables>(MUTATION);
