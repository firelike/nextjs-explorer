import Link from "next/link";
import {getAllCountries} from "@/lib/CountriesService";

export async function getServerSideProps () {
    const countries = await getAllCountries()
    return {props:{data:countries}}
}

const Countries = ({data}) => {

    return (
        <div className={'px-4 py-5 flex flex-col'}>
            <Link href={'/'}><h1>Home</h1></Link>

            <ul>
                {data.map((country) => (
                    <li key={country.code}>
                        <Link href={`/countries/${encodeURIComponent(country.code)}`}>
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Countries



