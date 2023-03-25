import { gql } from '@apollo/client';

export const QUERY = gql`
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
`;
