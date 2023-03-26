import { graphql } from '../../gql';

export const QUERY = graphql(/* GraphQL */ `
    query Dns {
        dns {
            generate {
                code
                error
                extra
                success
            }
        }
    }
`);
