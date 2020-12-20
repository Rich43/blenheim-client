import gql from 'graphql-tag';
import { UpdateSubDomainIPv4, UpdateSubDomainIPv4Variables } from '../../../../types/UpdateSubDomainIPv4';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateSubDomainIPv4($token: String!, $id: ID!, $index: Int!, $name: String!) {
        authentication {
            token(token: $token)
        }
        settings {
            updateSubDomainIpAddressV4(id: $id, index: $index, name: $name) {
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

export const useUpdateSubDomainIPv4Mutation = () => useMutation<UpdateSubDomainIPv4, UpdateSubDomainIPv4Variables>(MUTATION);
