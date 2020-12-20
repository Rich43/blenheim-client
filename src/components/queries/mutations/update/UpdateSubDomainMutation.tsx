import gql from 'graphql-tag';
import { UpdateSubDomain, UpdateSubDomainVariables } from '../../../../types/UpdateSubDomain';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateSubDomain($token: String!, $id: ID!, $index: Int!, $name: String!) {
        authentication {
            token(token: $token)
        }
        settings {
            updateSubDomain(id: $id, index: $index, name: $name) {
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

export const useUpdateSubDomainMutation = () => useMutation<UpdateSubDomain, UpdateSubDomainVariables>(MUTATION);
