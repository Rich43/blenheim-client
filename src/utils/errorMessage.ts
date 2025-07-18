import { ApolloError } from '@apollo/client';

export function formatErrorMessage(error: ApolloError): string {
    if (error.networkError) {
        return 'Network error: Please check your connection and try again.';
    }
    if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        return error.graphQLErrors[0].message;
    }
    return error.message || 'An unexpected error occurred.';
}
