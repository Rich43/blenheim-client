import { DataProxy, useQuery } from '@apollo/client';
import { graphql } from '../../gql';
import { DomainsQuery, DomainsQueryVariables } from '../../gql/graphql';

const QUERY = graphql(/* GraphQL */`
    query Domains {
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
`);

export const useDomainsQuery = () => useQuery<DomainsQuery, DomainsQueryVariables>(QUERY, {partialRefetch: true});

export const updateDomainsCache =
    (queryName: string) =>
        (cache: DataProxy, fetchResult: any) => {
            const {data} = fetchResult;
            const domainsQuery = cache.readQuery<DomainsQuery, DomainsQueryVariables>(
                {
                    query: QUERY
                }
            );
            if (domainsQuery && data && data.settings) {
                const fetchResultData = Reflect.get(data && data.settings, queryName);
                if (fetchResultData) {
                    cache.writeQuery<DomainsQuery, DomainsQueryVariables>(
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
