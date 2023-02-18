
import {getContinents} from "@/lib/CountriesService";
import Link from "next/link";


export async function getServerSideProps (context) {
    const continents = await getContinents()
    const continent = continents.find(item => item.code === context.params.code)
    return {props:{data:continent}}
}

const Continent = ({data}) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}><h1>Home</h1></Link>
                </li>
                <li>
                    <Link href={'/continents'}><h1>All Continents</h1></Link>
                </li>
            </ul>

            <div>
            <p>Continent code: {data.code}</p>
            <p>Continent Name: {data.name}</p>
            </div>
        </div>
    )
}

export default Continent