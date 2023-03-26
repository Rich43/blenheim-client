/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    '\n    query Dns {\n        dns {\n            generate {\n                code\n                error\n                extra\n                success\n            }\n        }\n    }\n': types.DnsDocument,
    '\n    query Domains {\n        settings {\n            domains {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n            defaultSubdomains\n            ipv4\n            ipv6\n        }\n    }\n': types.DomainsDocument,
    '\n    query Login($username: String!, $password: String!) {\n        authentication {\n            login(details: {name: $username, password: $password})\n        }\n    }\n': types.LoginDocument,
    '\n    query Settings {\n        settings {\n            defaultSubdomains\n            ipv4\n            ipv6\n        }\n    }\n': types.SettingsDocument,
    '\n    mutation CreateDefaultSubDomain($id: ID!) {\n        settings {\n            createDefaultSubDomain(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.CreateDefaultSubDomainDocument,
    '\n    mutation CreateDomain($id: ID!) {\n        settings {\n            createDomain(id: $id, subdomains: []) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.CreateDomainDocument,
    '\n    mutation CreateIPv4($id: ID!) {\n        settings {\n            createIpv4(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.CreateIPv4Document,
    '\n    mutation CreateIPv6($id: ID!) {\n        settings {\n            createIpv6(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.CreateIPv6Document,
    '\n    mutation Subdomain($id: ID!, $name: String!) {\n        settings {\n            createSubDomain(id: $id, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.SubdomainDocument,
    '\n    mutation DeleteDefaultSubDomain($index: Int!) {\n        settings {\n            deleteDefaultSubDomain(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.DeleteDefaultSubDomainDocument,
    '\n    mutation DeleteDomain($id: ID!) {\n        settings {\n            deleteDomain(id: $id) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.DeleteDomainDocument,
    '\n    mutation DeleteIPv4($index: Int!) {\n        settings {\n            deleteIpv4(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.DeleteIPv4Document,
    '\n    mutation DeleteIPv6($index: Int!) {\n        settings {\n            deleteIpv6(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.DeleteIPv6Document,
    '\n    mutation DeleteSubDomainIPv4($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomainIpAddressV4(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.DeleteSubDomainIPv4Document,
    '\n    mutation DeleteSubDomainIPv6($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomainIpAddressV6(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.DeleteSubDomainIPv6Document,
    '\n    mutation DeleteSubDomain($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomain(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.DeleteSubDomainDocument,
    '\n    mutation UpdateDefaultSubDomain($id: ID!, $index: Int!) {\n        settings {\n            updateDefaultSubDomain(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.UpdateDefaultSubDomainDocument,
    '\n    mutation UpdateDomain($id: ID!, $newName: String!) {\n        settings {\n            updateDomain(id: $id, newName: $newName) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.UpdateDomainDocument,
    '\n    mutation UpdateIPv4($id: ID!, $index: Int!) {\n        settings {\n            updateIpv4(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.UpdateIPv4Document,
    '\n    mutation UpdateIPv6($id: ID!, $index: Int!) {\n        settings {\n            updateIpv6(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n': types.UpdateIPv6Document,
    '\n    mutation UpdateSubDomainIPv4($id: ID!, $index: Int!, $name: String!) {\n        settings {\n            updateSubDomainIpAddressV4(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.UpdateSubDomainIPv4Document,
    '\n    mutation UpdateSubDomainIPv6($id: ID!, $index: Int!, $name: String!) {\n        settings {\n            updateSubDomainIpAddressV6(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.UpdateSubDomainIPv6Document,
    '\n    mutation UpdateSubDomain($id: ID!, $index: Int!, $name: String!) {\n\n        settings {\n            updateSubDomain(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n': types.UpdateSubDomainDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    query Dns {\n        dns {\n            generate {\n                code\n                error\n                extra\n                success\n            }\n        }\n    }\n'): (typeof documents)['\n    query Dns {\n        dns {\n            generate {\n                code\n                error\n                extra\n                success\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    query Domains {\n        settings {\n            domains {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n            defaultSubdomains\n            ipv4\n            ipv6\n        }\n    }\n'): (typeof documents)['\n    query Domains {\n        settings {\n            domains {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n            defaultSubdomains\n            ipv4\n            ipv6\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    query Login($username: String!, $password: String!) {\n        authentication {\n            login(details: {name: $username, password: $password})\n        }\n    }\n'): (typeof documents)['\n    query Login($username: String!, $password: String!) {\n        authentication {\n            login(details: {name: $username, password: $password})\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    query Settings {\n        settings {\n            defaultSubdomains\n            ipv4\n            ipv6\n        }\n    }\n'): (typeof documents)['\n    query Settings {\n        settings {\n            defaultSubdomains\n            ipv4\n            ipv6\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation CreateDefaultSubDomain($id: ID!) {\n        settings {\n            createDefaultSubDomain(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation CreateDefaultSubDomain($id: ID!) {\n        settings {\n            createDefaultSubDomain(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation CreateDomain($id: ID!) {\n        settings {\n            createDomain(id: $id, subdomains: []) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation CreateDomain($id: ID!) {\n        settings {\n            createDomain(id: $id, subdomains: []) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation CreateIPv4($id: ID!) {\n        settings {\n            createIpv4(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation CreateIPv4($id: ID!) {\n        settings {\n            createIpv4(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation CreateIPv6($id: ID!) {\n        settings {\n            createIpv6(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation CreateIPv6($id: ID!) {\n        settings {\n            createIpv6(id: $id) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation Subdomain($id: ID!, $name: String!) {\n        settings {\n            createSubDomain(id: $id, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation Subdomain($id: ID!, $name: String!) {\n        settings {\n            createSubDomain(id: $id, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation DeleteDefaultSubDomain($index: Int!) {\n        settings {\n            deleteDefaultSubDomain(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation DeleteDefaultSubDomain($index: Int!) {\n        settings {\n            deleteDefaultSubDomain(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation DeleteDomain($id: ID!) {\n        settings {\n            deleteDomain(id: $id) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation DeleteDomain($id: ID!) {\n        settings {\n            deleteDomain(id: $id) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation DeleteIPv4($index: Int!) {\n        settings {\n            deleteIpv4(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation DeleteIPv4($index: Int!) {\n        settings {\n            deleteIpv4(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation DeleteIPv6($index: Int!) {\n        settings {\n            deleteIpv6(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation DeleteIPv6($index: Int!) {\n        settings {\n            deleteIpv6(index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation DeleteSubDomainIPv4($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomainIpAddressV4(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation DeleteSubDomainIPv4($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomainIpAddressV4(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation DeleteSubDomainIPv6($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomainIpAddressV6(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation DeleteSubDomainIPv6($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomainIpAddressV6(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation DeleteSubDomain($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomain(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation DeleteSubDomain($id: ID!, $index: Int!) {\n        settings {\n            deleteSubDomain(id: $id, index: $index) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation UpdateDefaultSubDomain($id: ID!, $index: Int!) {\n        settings {\n            updateDefaultSubDomain(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation UpdateDefaultSubDomain($id: ID!, $index: Int!) {\n        settings {\n            updateDefaultSubDomain(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation UpdateDomain($id: ID!, $newName: String!) {\n        settings {\n            updateDomain(id: $id, newName: $newName) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation UpdateDomain($id: ID!, $newName: String!) {\n        settings {\n            updateDomain(id: $id, newName: $newName) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation UpdateIPv4($id: ID!, $index: Int!) {\n        settings {\n            updateIpv4(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation UpdateIPv4($id: ID!, $index: Int!) {\n        settings {\n            updateIpv4(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation UpdateIPv6($id: ID!, $index: Int!) {\n        settings {\n            updateIpv6(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation UpdateIPv6($id: ID!, $index: Int!) {\n        settings {\n            updateIpv6(id: $id, index: $index) {\n                ipv4\n                ipv6\n                defaultSubdomains\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation UpdateSubDomainIPv4($id: ID!, $index: Int!, $name: String!) {\n        settings {\n            updateSubDomainIpAddressV4(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation UpdateSubDomainIPv4($id: ID!, $index: Int!, $name: String!) {\n        settings {\n            updateSubDomainIpAddressV4(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation UpdateSubDomainIPv6($id: ID!, $index: Int!, $name: String!) {\n        settings {\n            updateSubDomainIpAddressV6(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation UpdateSubDomainIPv6($id: ID!, $index: Int!, $name: String!) {\n        settings {\n            updateSubDomainIpAddressV6(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation UpdateSubDomain($id: ID!, $index: Int!, $name: String!) {\n\n        settings {\n            updateSubDomain(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation UpdateSubDomain($id: ID!, $index: Int!, $name: String!) {\n\n        settings {\n            updateSubDomain(id: $id, index: $index, name: $name) {\n                id\n                subdomains {\n                    id\n                    ipAddressV4\n                    ipAddressV6\n                }\n            }\n        }\n    }\n'];

export function graphql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;