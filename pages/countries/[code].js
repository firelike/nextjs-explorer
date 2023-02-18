
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
            <ul className={'flex'}>
                <li className={'mt-1 px-12 py-3'}>
                    <Link href={'/'}><h1>Home</h1></Link>
                </li>
                <li className={'mt-1 px-12 py-3'}>
                    <Link href={'/countries'}><h1>All Countries</h1></Link>
                </li>
            </ul>

            <ul className={'h-56 grid grid-cols-3 gap-4 content-start'}>
                <li>Country code: {data.code}</li>
                <li>Country Name: {data.name}</li>
                <li>Country Native: {data.native}</li>
                <li>Country Continent: {data.continent.name}</li>
                <li>Country Emoji: {data.emoji}</li>
                <li>Country Languages: {data.languages.map(language => {
                    return (<div key={language.code}>{language.code}</div>)
                }) }</li>
            </ul>

        </div>
    )
}

export default Country