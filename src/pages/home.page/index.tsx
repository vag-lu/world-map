import React, { useState } from 'react'
import WorldMap from '../../components/world-map';
import { GetCountry } from '../../services/countries/useGetCountry';

const Home: React.FC = () => {


    const onCountrySelect = (countryCode: string | undefined) => {
        console.log("here")
        console.log(GetCountry(countryCode))
    }

    return (
        <>
            <WorldMap onCountrySelect={onCountrySelect}/>
        </>
    )

}

export default Home;