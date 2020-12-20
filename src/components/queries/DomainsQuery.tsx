import gql from 'graphql-tag';
import { AddDomain } from '../../types/AddDomain';
import { Domains, DomainsVariables } from '../../types/Domains';
import { DataProxy, FetchResult, QueryResult, useQuery } from '@apollo/client';
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

type DomainsQueryType = (variables: DomainsVariables) => QueryResult<Domains, DomainsVariables>;
export const useDomainsQuery : DomainsQueryType = (variables: DomainsVariables) =>
    useQuery<Domains, DomainsVariables>(QUERY, { partialRefetch: true, variables });

type DomainFetchResult = FetchResult<AddDomain | DeleteDomain | UpdateDomain>;
export type UpdateDomainsCacheType = (
    cache: DataProxy,
    fetchResult: DomainFetchResult
) => void;
export const updateDomainsCache =
    (queryName: string, token: string): UpdateDomainsCacheType =>
        (cache: DataProxy, fetchResult: DomainFetchResult) => {
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
