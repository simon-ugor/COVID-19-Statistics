import Layout from "../components/Layout.js"

import Link from "next/link"
import Head from "next/head";

const faq = () => {
    return (
        <Layout>
            <Head>
                <title>Frequently Asked Questions</title>
                <meta name="description" content="Most asked questions about Coronavirus pandemic, testing, symptoms and much more."></meta>
            </Head>
            <div>
                <div className="updated-main-div">
                    <h1>Frequently Asked Questions</h1>
                </div>

                <div className="buttons-top-div">
                    <Link href="covid19-symptoms"><a className="faq-button">
                    <h3 className="faq-title">COVID-19 symptomps vs cold</h3>
                        <br />
                        <p>
                            What are some of the most common symptomps
                            of coronavirus desease? How to differentiate 
                            Covid-19 vs cold or flu?
                        </p>
                    </a></Link>
                    <Link href="coronavirus-cases-worldwide-today"><a className="faq-button">
                    <h3 className="faq-title">Coronavirus cases worldwide today</h3>
                        <br />
                        <p>All reported cases of Coronavirus worldwide or by country.</p>
                    </a></Link>
                </div>

                <div className="buttons-top-div">
                    <Link href="how-covid-test-is-done"><a className="faq-button">
                        <h3 className="faq-title">How Covid-19 testing works?</h3>
                        <br />
                        <p>
                            Everything you need to know about testing for Coronavirus.
                        </p>
                    </a></Link>
                    <Link href="does-covid19-test-hurt"><a className="faq-button">
                    <h3 className="faq-title">Does COVID-19 test hurt?</h3>
                        <br />
                        <p>
                            Let's finally answer the ongoing question if it hurts
                            to get tested for Coronavirus and if you should be worried
                            or not.
                        </p>
                    </a></Link>
                </div>

                <div style={{display: "none"}} className="pages-div">
                    <Link href="faq"><a style={{color: "black"}} className="faq-link">1</a></Link>
                    <Link href="faq2"><a className="faq-link">2</a></Link>
                    <Link href="faq3"><a className="faq-link">3</a></Link>
                </div>



                <div className="homepage-link-div">
                    <Link href="/">
                        <a className="link">Homepage</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default faq