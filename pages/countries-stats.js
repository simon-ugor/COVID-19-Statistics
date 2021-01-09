import { useState } from "react"

import Layout from "../components/Layout.js"

import Link from "next/link"
import Head from "next/head"

const countriesStats = ({data}) => {

    const [countryData, setCountryData] = useState({})

    const change = (event) => {
        data.map(d => {
            if (d.name === event.target.value) {
                setCountryData(d)
            }
        })
    }

    return (
        <Layout>
            <Head>
                <title>COVID-19 Country Statistics</title>
                <meta name="description" content="Statisctics about every country fighting Coronavirus pandemic."></meta>
            </Head>
            <div className="countries-stats-div" style={{color: "white"}}>
                
                <div className="select-search-div">
                    
                    <div className="select-div">
                        <label className="choose-country" for="countries">Choose a country:</label>

                        <select className="select-box" onChange={change} name="countries" id="countries">
                            <option selected="true" disabled="disabled">Select or type in country</option>
                            {data.map(d => <option value={d.name}>{d.name}</option>)}
                        </select>
                    </div>

                </div>

                <div>{data.map(d => {
                    if (d.name === countryData.name) {
                        return (
                            <>
                                <div className="country-main-div">
                                    <h1 className="country-name">{d.name}</h1>
                                </div>
                                <div className="data-mobile-div">
                                    <div className="data-main-div">
                                        <div className="data-div">
                                            <h1>Confirmed</h1>
                                            <h1>{new Intl.NumberFormat('fr-FR').format(d.latest_data.confirmed).split(",").join(" ")}</h1>
                                        </div>

                                        <div className="data-div">
                                            <h1>Critical</h1>
                                            <h1>{new Intl.NumberFormat('fr-FR').format(d.latest_data.critical).split(",").join(" ")}</h1>
                                        </div>

                                        <div className="data-div">
                                            <h1>Deaths</h1>
                                            <h1>{new Intl.NumberFormat('fr-FR').format(d.latest_data.deaths).split(",").join(" ")}</h1>
                                        </div>

                                        <div className="data-div">
                                            <h1>Recovered</h1>
                                            <h1>{new Intl.NumberFormat('fr-FR').format(d.latest_data.recovered).split(",").join(" ")}</h1>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })}</div>
                <div className="homepage-link-div">
                    <Link href="/">
                        <a className="link">Homepage</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

countriesStats.getInitialProps = async () => {
    const response = await fetch("https://corona-api.com/countries")
    const data = await response.json()
    return {data: data.data}
}

export default countriesStats