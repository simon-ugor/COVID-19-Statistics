import Layout from "../components/Layout.js"

import Link from "next/link"
import Head from "next/head";

const faq2 = () => {
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
                    <Link href="/"><a className="faq-button">
                        <h3 className="faq-title">Title2</h3>
                        <br />
                        <p>This is a description of this link</p>
                    </a></Link>
                    <Link href="/"><a className="faq-button">
                        <h3 className="faq-title">Title2</h3>
                        <br />
                        <p>This is a description of this link</p>
                    </a></Link>
                </div>

                <div className="buttons-top-div">
                    <Link href="/"><a className="faq-button">
                        <h3 className="faq-title">Title2</h3>
                        <br />
                        <p>This is a description of this link</p>
                    </a></Link>
                    <Link href="/"><a className="faq-button">
                        <h3 className="faq-title">Title2</h3>
                        <br />
                        <p>This is a description of this link</p>
                    </a></Link>
                </div>

                <div className="pages-div">
                    <Link href="faq"><a className="faq-link">1</a></Link>
                    <Link href="faq2"><a style={{color: "black"}} className="faq-link">2</a></Link>
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

export default faq2