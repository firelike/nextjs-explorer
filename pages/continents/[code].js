
import {getContinents} from "@/lib/CountriesService";
import Link from "next/link";
import MyButton from "@/components/MyButton";


export async function getServerSideProps (context) {
    const continents = await getContinents()
    const continent = continents.find(item => item.code === context.params.code)
    return {props:{data:continent}}
}

const Continent = ({data}) => {
    return (
        <div>
            <ul className={'flex gap-px'}>
                <li className={'mt-1 px-12 py-3'}>
                    <Link href={'/'}><h1 className={'text-lg font-bold'}>Home</h1></Link>
                </li>
                <li className={'mt-1 px-12 py-3'}>
                    <Link href={'/continents'}><h1 className={'text-lg font-bold'}>All Continents</h1></Link>
                </li>
            </ul>

            <ul className={'h-56 grid grid-cols-3 gap-4 content-start'}>
                <li>Continent code: {data.code}</li>
                <li>Continent Name: {data.name}</li>
            </ul>
        </div>
    )
}

export default Continent