import Link from "next/link";
import {getContinents} from "@/lib/CountriesService";

export async function getServerSideProps () {
    const continents = await getContinents()
    return {props:{data:continents}}
}

const Continents = ({data}) => {

    return (
        <div className={'px-4 py-5 flex flex-col'}>
            <Link href={'/'}><h1>Home</h1></Link>

            <table>
                <thead>
                <tr>
                    <th>Continent name</th>
                    <th>Country code</th>
                </tr>
                </thead>
                <tbody>
                {data.map((continent) => (
                    <tr key={continent.code}>
                        <td>
                            <Link href={`/continents/${encodeURIComponent(continent.code)}`}>
                            {continent.name}
                        </Link>
                        </td>
                        <td>
                                {continent.code}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}

export default Continents



