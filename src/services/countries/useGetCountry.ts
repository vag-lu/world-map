import { gql, useQuery } from "@apollo/client";

const GET_COUNTRY = gql`
    query: GetCountry($code: countryCode!) {
          country(code: $code) {
            name
            native
            capital
            emoji
            currency
            languages {
              code
              name
            }
        }     
    }
`

export const GetCountry = (code: string | undefined) => {
    const { data } = useQuery(GET_COUNTRY, {
        variables: {code : {code} }
    });
    return data?.country?.data;
}