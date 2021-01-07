import Layout from "../components/Layout.js"

import Head from 'next/head'

const Index = ({data}) => {
    return (
        <Layout>
            <div>
                <Head>
                    <title>COVID-19 Statistics</title>
                    <meta name="description" content="Providing latest statistics about ongoing Coronavirus pandemic."></meta>
                </Head>
                <div className="updated-main-div">
                    <h1>Updated at:&nbsp;</h1>
                    <h1>{data.date}</h1>
                </div>
                <div className="data-main-div">

                    <div className="data-div">
                        <h1>Confirmed</h1>
                        <h1>{new Intl.NumberFormat('fr-FR').format(data.confirmed).split(",").join(" ")}</h1>
                    </div>

                    <div className="data-div">
                        <h1>Active</h1>
                        <h1>{new Intl.NumberFormat('fr-FR').format(data.active).split(",").join(" ")}</h1>
                    </div>

                    <div className="data-div">
                        <h1>Deaths</h1>
                        <h1>{new Intl.NumberFormat('fr-FR').format(data.deaths).split(",").join(" ")}</h1>
                    </div>

                    <div className="data-div">
                        <h1>Recovered</h1>
                        <h1>{new Intl.NumberFormat('fr-FR').format(data.recovered).split(",").join(" ")}</h1>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const response = await fetch("https://corona-api.com/timeline")
    const data = await response.json()
    return {data: data.data[0]}
}

export default Index