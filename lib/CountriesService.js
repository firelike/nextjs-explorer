import { GraphQLClient, gql } from 'graphql-request'

export const client = new GraphQLClient(
    process.env.GRAFBASE_API_URL,
    {
        headers: {
            'x-api-key': process.env.GRAFBASE_API_KEY
        }
    }
)

const GetCountriesQuery = gql`
    query GetCountries($filter: CountryFilterInput) {
        countries(filter: $filter) {
            code
            name
            native
            continent {
                code
                name
            }
            languages {
                code
                name
                native
            }
            emoji
        }
    }`

export async function getAllCountryCodes (filter=null) {

    let variables= {}
    if(filter){
        variables=Object.assign({}, variables, filter)
    }

    const response = await client.request(GetCountriesQuery, variables)
    console.debug("IN THE SERVICE", response)

    return  response.countries.map(country => country.code)
}
export async function getAllCountries (filter=null) {
    let variables= {}
    if(filter){
        variables=Object.assign({}, variables, filter)
    }

    const response = await client.request(GetCountriesQuery, variables)

    return  response.countries
}