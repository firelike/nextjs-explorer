
import {getAllCountries, getAllCountryCodes} from "@/lib/CountriesService";
import Link from "next/link";

// export async function getStaticPaths () {
//     const codes = await getAllCountryCodes()
//     const paths = codes.map(code => `/countries/${code}`)
//     return {paths: paths, fallback: false}
// }


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
        </div>
    )
}

export  default Country