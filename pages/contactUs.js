import Layout from "../components/Layout"

import Link from "next/link"
import Head from "next/head"

const contactUs = () => {
    return (
        <Layout>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="You can always reach out to us here."></meta>
            </Head>
            <div className="updated-main-div">
                <h1>Contact Us</h1>
            </div>
            <div className="text-div">
                <p className="p-text">
                    For any questions or troubleshooting you can always contact us at:
                </p>
                <br />
                <p className="p-text">
                    covidstatisticsonline@gmail.com
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

export default contactUs