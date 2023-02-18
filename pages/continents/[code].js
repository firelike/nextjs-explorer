
import {getContinents} from "@/lib/CountriesService";


export async function getServerSideProps (context) {
    const continents = await getContinents()
    const continent = continents.find(item => item.code === context.params.code)
    return {props:{data:continent}}
}

const Continent = ({data}) => {
    return (
        <div>
            <p>Continent code: {data.code}</p>
            <p>Continent Name: {data.name}</p>
        </div>
    )
}

export default Continent