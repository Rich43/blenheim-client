import gql from 'graphql-tag';
import { UpdateSubDomainIPv6, UpdateSubDomainIPv6Variables } from '../../../../types/UpdateSubDomainIPv6';
import { useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation UpdateSubDomainIPv6($token: String!, $id: ID!, $index: Int!, $name: String!) {
        authentication {
            token(token: $token)
        }
        settings {
            updateSubDomainIpAddressV6(id: $id, index: $index, name: $name) {
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

export const useUpdateSubDomainIPv6Mutation = () => useMutation<UpdateSubDomainIPv6, UpdateSubDomainIPv6Variables>(MUTATION);
