import gql from 'graphql-tag';
import { CreateIPv4, CreateIPv4Variables } from '../../../../types/CreateIPv4';
import { MutationTuple, useMutation } from '@apollo/client';

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

type CreateIPv4MutationType = () => MutationTuple<CreateIPv4, CreateIPv4Variables>;
export const useCreateIPv4Mutation: CreateIPv4MutationType = () => useMutation<CreateIPv4, CreateIPv4Variables>(MUTATION);
