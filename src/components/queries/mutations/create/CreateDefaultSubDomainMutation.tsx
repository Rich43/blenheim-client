import { CreateDefaultSubDomain, CreateDefaultSubDomainVariables } from '../../../../types/CreateDefaultSubDomain';
import { gql, MutationTuple, useMutation } from '@apollo/client';

const MUTATION = gql`
    mutation CreateDefaultSubDomain($id: ID!) {

        settings {
            createDefaultSubDomain(id: $id) {
                ipv4
                ipv6
                defaultSubdomains
            }
        }
    }
`;

type CreateDefaultSubDomainMutationType = () =>
    MutationTuple<CreateDefaultSubDomain, CreateDefaultSubDomainVariables>;
export const useCreateDefaultSubDomainMutation: CreateDefaultSubDomainMutationType =
    () => useMutation<CreateDefaultSubDomain, CreateDefaultSubDomainVariables>(MUTATION);
