
import {getAllCountries} from "@/lib/CountriesService";
import Link from "next/link";


export async function getServerSideProps (context) {
    const countries = await getAllCountries()
    const country = countries.find(item => item.code === context.params.code)
    return {props:{data:country}}
}

const Country = ({data}) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}><h1>Home</h1></Link>
                </li>
                <li>
                    <Link href={'/countries'}><h1>All Countries</h1></Link>
                </li>
            </ul>

            <div>
                <p>Country code: {data.code}</p>
                <p>Country Name: {data.name}</p>
                <p>Country Native: {data.native}</p>
                <p>Country Continent: {data.continent.name}</p>
                <p>Country Emoji: {data.emoji}</p>
                <p>Country Languages: {data.languages.map(language => {
                    return (<div key={language.code}>{language.code}</div>)
                }) }</p>
            </div>

        </div>
    )
}

export default Country