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

const GetContinentsQuery = gql`
    query GetContinents($filter: ContinentFilterInput) {
        continents(filter: $filter) {
            code
            name
            countries {
                code
                name
            }
        }
    }`

export async function getAllCountries (filter=null) {
    let variables= {}
    if(filter){
        variables=Object.assign({}, variables, filter)
    }

    const response = await client.request(GetCountriesQuery, variables)

    return  response.countries
}
export async function getContinents (filter=null) {
    let variables= {}
    if(filter){
        variables=Object.assign({}, variables, filter)
    }

    const response = await client.request(GetContinentsQuery, variables)

    return  response.continents
}