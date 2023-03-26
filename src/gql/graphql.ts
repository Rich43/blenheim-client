/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Authentication = {
    __typename?: 'Authentication';
    changePassword?: Maybe<Scalars['Boolean']>;
    currentUser?: Maybe<UserType>;
    login?: Maybe<Scalars['String']>;
    logout?: Maybe<Scalars['Boolean']>;
};


export type AuthenticationChangePasswordArgs = {
    password: Scalars['String'];
};


export type AuthenticationLoginArgs = {
    details: UserInput;
};

export type Dns = {
    __typename?: 'Dns';
    generate: Result;
};

export type Domain = {
    __typename?: 'Domain';
    id: Scalars['ID'];
    subdomains: Array<SubDomain>;
};

export type Mutations = {
    __typename?: 'Mutations';
    authentication: Authentication;
    settings: SettingsMutations;
};

export type Query = {
    __typename?: 'Query';
    authentication: Authentication;
    dns: Dns;
    settings: Settings;
};

export type Result = {
    __typename?: 'Result';
    code: Scalars['String'];
    error: Scalars['String'];
    extra?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type Settings = {
    __typename?: 'Settings';
    defaultSubdomains: Array<Scalars['String']>;
    domains: Array<Domain>;
    ipv4: Array<Scalars['String']>;
    ipv6: Array<Scalars['String']>;
};

export type SettingsMutations = {
    __typename?: 'SettingsMutations';
    createDefaultSubDomain?: Maybe<Settings>;
    createDomain?: Maybe<Array<Domain>>;
    createIpv4?: Maybe<Settings>;
    createIpv6?: Maybe<Settings>;
    createSubDomain?: Maybe<Domain>;
    deleteDefaultSubDomain?: Maybe<Settings>;
    deleteDomain?: Maybe<Array<Domain>>;
    deleteIpv4?: Maybe<Settings>;
    deleteIpv6?: Maybe<Settings>;
    deleteSubDomain?: Maybe<Domain>;
    deleteSubDomainIpAddressV4?: Maybe<Domain>;
    deleteSubDomainIpAddressV6?: Maybe<Domain>;
    updateDefaultSubDomain: Settings;
    updateDomain?: Maybe<Array<Domain>>;
    updateIpv4: Settings;
    updateIpv6: Settings;
    updateSubDomain?: Maybe<Domain>;
    updateSubDomainIpAddressV4?: Maybe<Domain>;
    updateSubDomainIpAddressV6?: Maybe<Domain>;
};


export type SettingsMutationsCreateDefaultSubDomainArgs = {
    id: Scalars['ID'];
};


export type SettingsMutationsCreateDomainArgs = {
    id: Scalars['ID'];
    subdomains: Array<Scalars['String']>;
};


export type SettingsMutationsCreateIpv4Args = {
    id: Scalars['ID'];
};


export type SettingsMutationsCreateIpv6Args = {
    id: Scalars['ID'];
};


export type SettingsMutationsCreateSubDomainArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
};


export type SettingsMutationsDeleteDefaultSubDomainArgs = {
    index: Scalars['Int'];
};


export type SettingsMutationsDeleteDomainArgs = {
    id: Scalars['ID'];
};


export type SettingsMutationsDeleteIpv4Args = {
    index: Scalars['Int'];
};


export type SettingsMutationsDeleteIpv6Args = {
    index: Scalars['Int'];
};


export type SettingsMutationsDeleteSubDomainArgs = {
    id: Scalars['ID'];
    index: Scalars['Int'];
};


export type SettingsMutationsDeleteSubDomainIpAddressV4Args = {
    id: Scalars['ID'];
    index: Scalars['Int'];
};


export type SettingsMutationsDeleteSubDomainIpAddressV6Args = {
    id: Scalars['ID'];
    index: Scalars['Int'];
};


export type SettingsMutationsUpdateDefaultSubDomainArgs = {
    id: Scalars['ID'];
    index: Scalars['Int'];
};


export type SettingsMutationsUpdateDomainArgs = {
    id: Scalars['ID'];
    newName: Scalars['String'];
};


export type SettingsMutationsUpdateIpv4Args = {
    id: Scalars['ID'];
    index: Scalars['Int'];
};


export type SettingsMutationsUpdateIpv6Args = {
    id: Scalars['ID'];
    index: Scalars['Int'];
};


export type SettingsMutationsUpdateSubDomainArgs = {
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
};


export type SettingsMutationsUpdateSubDomainIpAddressV4Args = {
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
};


export type SettingsMutationsUpdateSubDomainIpAddressV6Args = {
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
};

export type SubDomain = {
    __typename?: 'SubDomain';
    id: Scalars['ID'];
    ipAddressV4?: Maybe<Scalars['String']>;
    ipAddressV6?: Maybe<Scalars['String']>;
};

export type UserInput = {
    name: Scalars['String'];
    password: Scalars['String'];
};

export type UserType = {
    __typename?: 'UserType';
    name?: Maybe<Scalars['String']>;
};

export type DnsQueryVariables = Exact<{ [key: string]: never; }>;


export type DnsQuery = { __typename?: 'Query', dns: { __typename?: 'Dns', generate: { __typename?: 'Result', code: string, error: string, extra?: string | null, success?: boolean | null } } };

export type DomainsQueryVariables = Exact<{ [key: string]: never; }>;


export type DomainsQuery = { __typename?: 'Query', settings: { __typename?: 'Settings', defaultSubdomains: Array<string>, ipv4: Array<string>, ipv6: Array<string>, domains: Array<{ __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> }> } };

export type LoginQueryVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', authentication: { __typename?: 'Authentication', login?: string | null } };

export type SettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingsQuery = { __typename?: 'Query', settings: { __typename?: 'Settings', defaultSubdomains: Array<string>, ipv4: Array<string>, ipv6: Array<string> } };

export type CreateDefaultSubDomainMutationVariables = Exact<{
    id: Scalars['ID'];
}>;


export type CreateDefaultSubDomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', createDefaultSubDomain?: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } | null } };

export type CreateDomainMutationVariables = Exact<{
    id: Scalars['ID'];
}>;


export type CreateDomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', createDomain?: Array<{ __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> }> | null } };

export type CreateIPv4MutationVariables = Exact<{
    id: Scalars['ID'];
}>;


export type CreateIPv4Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', createIpv4?: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } | null } };

export type CreateIPv6MutationVariables = Exact<{
    id: Scalars['ID'];
}>;


export type CreateIPv6Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', createIpv6?: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } | null } };

export type SubdomainMutationVariables = Exact<{
    id: Scalars['ID'];
    name: Scalars['String'];
}>;


export type SubdomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', createSubDomain?: { __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> } | null } };

export type DeleteDefaultSubDomainMutationVariables = Exact<{
    index: Scalars['Int'];
}>;


export type DeleteDefaultSubDomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', deleteDefaultSubDomain?: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } | null } };

export type DeleteDomainMutationVariables = Exact<{
    id: Scalars['ID'];
}>;


export type DeleteDomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', deleteDomain?: Array<{ __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> }> | null } };

export type DeleteIPv4MutationVariables = Exact<{
    index: Scalars['Int'];
}>;


export type DeleteIPv4Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', deleteIpv4?: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } | null } };

export type DeleteIPv6MutationVariables = Exact<{
    index: Scalars['Int'];
}>;


export type DeleteIPv6Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', deleteIpv6?: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } | null } };

export type DeleteSubDomainIPv4MutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
}>;


export type DeleteSubDomainIPv4Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', deleteSubDomainIpAddressV4?: { __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> } | null } };

export type DeleteSubDomainIPv6MutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
}>;


export type DeleteSubDomainIPv6Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', deleteSubDomainIpAddressV6?: { __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> } | null } };

export type DeleteSubDomainMutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
}>;


export type DeleteSubDomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', deleteSubDomain?: { __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> } | null } };

export type UpdateDefaultSubDomainMutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
}>;


export type UpdateDefaultSubDomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', updateDefaultSubDomain: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } } };

export type UpdateDomainMutationVariables = Exact<{
    id: Scalars['ID'];
    newName: Scalars['String'];
}>;


export type UpdateDomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', updateDomain?: Array<{ __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> }> | null } };

export type UpdateIPv4MutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
}>;


export type UpdateIPv4Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', updateIpv4: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } } };

export type UpdateIPv6MutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
}>;


export type UpdateIPv6Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', updateIpv6: { __typename?: 'Settings', ipv4: Array<string>, ipv6: Array<string>, defaultSubdomains: Array<string> } } };

export type UpdateSubDomainIPv4MutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
}>;


export type UpdateSubDomainIPv4Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', updateSubDomainIpAddressV4?: { __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> } | null } };

export type UpdateSubDomainIPv6MutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
}>;


export type UpdateSubDomainIPv6Mutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', updateSubDomainIpAddressV6?: { __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> } | null } };

export type UpdateSubDomainMutationVariables = Exact<{
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
}>;


export type UpdateSubDomainMutation = { __typename?: 'Mutations', settings: { __typename?: 'SettingsMutations', updateSubDomain?: { __typename?: 'Domain', id: string, subdomains: Array<{ __typename?: 'SubDomain', id: string, ipAddressV4?: string | null, ipAddressV6?: string | null }> } | null } };


export const DnsDocument = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'query',
        'name': {'kind': 'Name', 'value': 'Dns'},
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'dns'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'generate'},
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'code'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'error'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'extra'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'success'}}]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DnsQuery, DnsQueryVariables>;
export const DomainsDocument = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'query',
        'name': {'kind': 'Name', 'value': 'Domains'},
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'domains'},
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'defaultSubdomains'}}, {
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'ipv4'}
                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DomainsQuery, DomainsQueryVariables>;
export const LoginDocument = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'query',
        'name': {'kind': 'Name', 'value': 'Login'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'username'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'String'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'password'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'String'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'authentication'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'login'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'details'},
                            'value': {
                                'kind': 'ObjectValue',
                                'fields': [{
                                    'kind': 'ObjectField',
                                    'name': {'kind': 'Name', 'value': 'name'},
                                    'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'username'}}
                                }, {
                                    'kind': 'ObjectField',
                                    'name': {'kind': 'Name', 'value': 'password'},
                                    'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'password'}}
                                }]
                            }
                        }]
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const SettingsDocument = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'query',
        'name': {'kind': 'Name', 'value': 'Settings'},
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv4'}}, {
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'ipv6'}
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<SettingsQuery, SettingsQueryVariables>;
export const CreateDefaultSubDomainDocument = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'CreateDefaultSubDomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'createDefaultSubDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<CreateDefaultSubDomainMutation, CreateDefaultSubDomainMutationVariables>;
export const CreateDomainDocument = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'CreateDomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'createDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'subdomains'},
                            'value': {'kind': 'ListValue', 'values': []}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<CreateDomainMutation, CreateDomainMutationVariables>;
export const CreateIPv4Document = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'CreateIPv4'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'createIpv4'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<CreateIPv4Mutation, CreateIPv4MutationVariables>;
export const CreateIPv6Document = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'CreateIPv6'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'createIpv6'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<CreateIPv6Mutation, CreateIPv6MutationVariables>;
export const SubdomainDocument = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'Subdomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'name'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'String'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'createSubDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'name'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'name'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<SubdomainMutation, SubdomainMutationVariables>;
export const DeleteDefaultSubDomainDocument = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'DeleteDefaultSubDomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'deleteDefaultSubDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DeleteDefaultSubDomainMutation, DeleteDefaultSubDomainMutationVariables>;
export const DeleteDomainDocument = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'DeleteDomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'deleteDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DeleteDomainMutation, DeleteDomainMutationVariables>;
export const DeleteIPv4Document = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'DeleteIPv4'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'deleteIpv4'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DeleteIPv4Mutation, DeleteIPv4MutationVariables>;
export const DeleteIPv6Document = {
    'kind': 'Document',
    'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'DeleteIPv6'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'deleteIpv6'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DeleteIPv6Mutation, DeleteIPv6MutationVariables>;
export const DeleteSubDomainIPv4Document = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'DeleteSubDomainIPv4'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'deleteSubDomainIpAddressV4'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DeleteSubDomainIPv4Mutation, DeleteSubDomainIPv4MutationVariables>;
export const DeleteSubDomainIPv6Document = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'DeleteSubDomainIPv6'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'deleteSubDomainIpAddressV6'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DeleteSubDomainIPv6Mutation, DeleteSubDomainIPv6MutationVariables>;
export const DeleteSubDomainDocument = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'DeleteSubDomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'deleteSubDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<DeleteSubDomainMutation, DeleteSubDomainMutationVariables>;
export const UpdateDefaultSubDomainDocument = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'UpdateDefaultSubDomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'updateDefaultSubDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<UpdateDefaultSubDomainMutation, UpdateDefaultSubDomainMutationVariables>;
export const UpdateDomainDocument = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'UpdateDomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'newName'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'String'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'updateDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'newName'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'newName'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<UpdateDomainMutation, UpdateDomainMutationVariables>;
export const UpdateIPv4Document = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'UpdateIPv4'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'updateIpv4'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<UpdateIPv4Mutation, UpdateIPv4MutationVariables>;
export const UpdateIPv6Document = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'UpdateIPv6'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'updateIpv6'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'ipv4'}
                            }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipv6'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'defaultSubdomains'}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<UpdateIPv6Mutation, UpdateIPv6MutationVariables>;
export const UpdateSubDomainIPv4Document = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'UpdateSubDomainIPv4'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'name'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'String'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'updateSubDomainIpAddressV4'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'name'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'name'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<UpdateSubDomainIPv4Mutation, UpdateSubDomainIPv4MutationVariables>;
export const UpdateSubDomainIPv6Document = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'UpdateSubDomainIPv6'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'name'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'String'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'updateSubDomainIpAddressV6'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'name'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'name'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<UpdateSubDomainIPv6Mutation, UpdateSubDomainIPv6MutationVariables>;
export const UpdateSubDomainDocument = {
    'kind': 'Document', 'definitions': [{
        'kind': 'OperationDefinition',
        'operation': 'mutation',
        'name': {'kind': 'Name', 'value': 'UpdateSubDomain'},
        'variableDefinitions': [{
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'ID'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'Int'}}}
        }, {
            'kind': 'VariableDefinition',
            'variable': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'name'}},
            'type': {'kind': 'NonNullType', 'type': {'kind': 'NamedType', 'name': {'kind': 'Name', 'value': 'String'}}}
        }],
        'selectionSet': {
            'kind': 'SelectionSet',
            'selections': [{
                'kind': 'Field',
                'name': {'kind': 'Name', 'value': 'settings'},
                'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [{
                        'kind': 'Field',
                        'name': {'kind': 'Name', 'value': 'updateSubDomain'},
                        'arguments': [{
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'id'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'id'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'index'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'index'}}
                        }, {
                            'kind': 'Argument',
                            'name': {'kind': 'Name', 'value': 'name'},
                            'value': {'kind': 'Variable', 'name': {'kind': 'Name', 'value': 'name'}}
                        }],
                        'selectionSet': {
                            'kind': 'SelectionSet',
                            'selections': [{'kind': 'Field', 'name': {'kind': 'Name', 'value': 'id'}}, {
                                'kind': 'Field',
                                'name': {'kind': 'Name', 'value': 'subdomains'},
                                'selectionSet': {
                                    'kind': 'SelectionSet',
                                    'selections': [{
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'id'}
                                    }, {
                                        'kind': 'Field',
                                        'name': {'kind': 'Name', 'value': 'ipAddressV4'}
                                    }, {'kind': 'Field', 'name': {'kind': 'Name', 'value': 'ipAddressV6'}}]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<UpdateSubDomainMutation, UpdateSubDomainMutationVariables>;