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

            <table>
                <thead>
                <tr><th>Country Name</th></tr>
                </thead>
                <tbody>
                {data.map((country) => (
                    <tr key={country.code}>
                        <td>
                            <Link href={`/countries/${encodeURIComponent(country.code)}`}>
                            {country.name}
                        </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}

export default Countries



