import Layout from "../components/Layout"

import Link from "next/link"
import Head from "next/head"

const aboutUs = () => {
    return (
        <Layout>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Brief description of our webpage covidstatistics.online aimed towards Coronavirus"></meta>
            </Head>
            <div className="updated-main-div">
                <h1>About Us</h1>
            </div>
            <div className="text-div">
                <p className="p-text">
                    Welcome to our Covid-19 tracking webpage. This 
                    website was created to spread awareness of Coronavirus
                    and keep everyone up to date with the latest informations.
                    Please keep in mind out data are not 100% verified
                    so by any means do not base any important decisions
                    or research on them. These data are only meant to 
                    protect people from disinformation.
                </p>
                <br />
                <p className="p-text">
                    Thank you for you visit, stay safe and wear your mask!
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

export default aboutUs