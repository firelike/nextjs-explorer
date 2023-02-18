
import {getAllCountries} from "@/lib/CountriesService";


export async function getServerSideProps (context) {
    const countries = await getAllCountries()
    const country = countries.find(item => item.code === context.params.code)
    return {props:{data:country}}
}

const Country = ({data}) => {
    return (
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
    )
}

export default Country