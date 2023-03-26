/* eslint-disable camelcase */

export interface DomainsListProps {
    domainsSettings: any;
    domainIndex: number;
}

export type DomainsArray = any[] | null;

export function createDomainMap(domains: DomainsArray): {
    domainMap: { [key: string]: string },
    firstDomain: string | undefined
} {
    let firstDomain;
    const domainMap: { [key: string]: string } = {};

    if (domains) {
        for (const domain of domains) {
            if (domain && domain.id) {
                domainMap[domain.id] = domain.id;
                if (!firstDomain) {
                    firstDomain = domain.id;
                }
            }
        }
    }
    return { domainMap, firstDomain };
}
