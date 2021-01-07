import Link from "next/link"
import Head from "next/head"
import Layout from "../components/Layout"

const coronavirusCasesWorldwideToday = () => {
    return (
        <Layout>
            <Head>
                <title>Coronavirus Cases Worldwide Today</title>
                <meta name="description" content="Get some more knowledge about ongoing Coronavirus pandemic in your country or worldwide."></meta>
            </Head>
            <div className="updated-main-div">
                <h1>Coronavirus cases worldwide today</h1>
            </div>

            <div className="text-div">
                <p className="p-text">
                    Are you wondering how does it look with 
                    Covid19 worldwide? Or are you interested
                    specifically in your country? Then this
                    is the right place for you. Our webpage
                    is providing latest statistics about 
                    the ongoing pandemic.
                </p>
                <br />
                <p className="p-text">
                    You can check out our homepage for worldwide 
                    statistics about Covid19 or head to the 
                    Countries Stats section at the top left and
                    look for your country. Using the dropdown
                    menu in Counries Stats section, you can either
                    scroll to find the country you are looking for or
                    easily just type in the name of the country.
                </p>
                <br />
                <p className="p-text">
                    You can 
                    find various informations about confirmed or 
                    active cases, as well as deaths and recovered
                    cases. Please keep in mind our statistics are not
                    100% verified, but are definitely enough to
                    protect everyone from disinformation. 
                </p>
                <br />
                <p className="p-text">
                    Stay healthy, always make sure to protect
                    yourself and others around you and wear
                    your mask!
                </p>
            </div>

            <div className="homepage-link-div">
                <Link href="/">
                    <a className="link">Homepage</a>
                </Link>
            </div>
        </Layout>
    )
}

export default coronavirusCasesWorldwideToday