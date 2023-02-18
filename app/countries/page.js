

import { gql, grafbase } from '../client'
import Link from "next/link";

const GetCountriesQuery = gql`
    query GetCountries($filter: CountryFilterInput) {
        countries(filter: $filter) {
            code
            name
            native
        }
    }
`

const Countries = async ({data}) => {
    const countriesCollection = await grafbase.request(GetCountriesQuery, {
        // filter: {code: {eq: 'us'}}
    })

    console.debug(countriesCollection)
    return (
        <>
            <Link href={'/'}><h1>Home</h1></Link>
        <nav>
            <ul>
                {countriesCollection.countries.map(item => <li><Link href={`/countries/${item.code}`}>{item.name}</Link></li>)}
            </ul>
           </nav>
        </>
    )


}



export default Countries