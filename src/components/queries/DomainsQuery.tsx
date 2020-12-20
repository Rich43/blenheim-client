import gql from 'graphql-tag';
import { AddDomain } from '../../types/AddDomain';
import { Domains, DomainsVariables } from '../../types/Domains';
import { DataProxy, FetchResult, useQuery } from '@apollo/client';
import { DeleteDomain } from '../../types/DeleteDomain';
import { UpdateDomain } from '../../types/UpdateDomain';

const QUERY = gql`
    query Domains($token: String!) {
        authentication {
            token(token: $token)
        }
        settings {
            domains {
                id
                subdomains {
                    id
                    ipAddressV4
                    ipAddressV6
                }
            }
            defaultSubdomains
            ipv4
            ipv6
        }
    }
`;

export const useDomainsQuery = (variables: DomainsVariables) =>
    useQuery<Domains, DomainsVariables>(QUERY, { partialRefetch: true, variables });

export const updateDomainsCache =
    (queryName: string, token: string) =>
        (cache: DataProxy, fetchResult: FetchResult<AddDomain | DeleteDomain | UpdateDomain>) => {
            const { data } = fetchResult;
            const domainsQuery = cache.readQuery<Domains, DomainsVariables>(
                {
                    query: QUERY,
                    variables: { token: token }
                }
            );
            if (domainsQuery && data && data.settings) {
                const fetchResultData = Reflect.get(data && data.settings, queryName);
                if (fetchResultData) {
                    cache.writeQuery<Domains, DomainsVariables>(
                        {
                            query: QUERY,
                            data: {
                                ...domainsQuery,
                                settings: {
                                    ...domainsQuery.settings,
                                    domains: fetchResultData
                                }
                            }
                        }
                    );
                }
            }
        };
