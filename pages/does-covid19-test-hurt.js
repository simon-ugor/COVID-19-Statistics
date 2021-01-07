import Link from "next/link"
import Head from "next/head"
import Layout from "../components/Layout"

const doesCovid19TestHurt = () => {
    return (
        <Layout>
            <Head>
                <title>Does COVID-19 testing hurt</title>
                <meta name="description" content="Answering the long unanswered question if it hurts to get tested for Coronavirus."></meta>
            </Head>
            <div className="updated-main-div">
                <h1>Does it hurt to get tested for Coronavirus?</h1>
            </div>

            <div className="text-div">
                <p className="p-text">
                    The COVID-19 test shouldn’t be painful, but it can be uncomfortable – there’s a reason you don’t normally put things up your nose! It’s very quick though, so even if it feels a bit weird, it will only last a couple of seconds.
                </p>
                <br />
                <p className="p-text">
                    If you find that the testing is really hurting you, you should tell the doctor or nurse performing the test straight away. It can also help to tell them if you’re feeling a bit nervous beforehand, so they can help you feel more at ease.
                </p>
                <br />
                <p className="p-text">
                    Don’t put off a COVID-19 swab test out of fear about how unpleasant the procedure might be. Early diagnosis allows for earlier medical intervention if your condition worsens. Plus, if you have the coronavirus you need to know it so you can self-isolate to avoid spreading the virus to loved ones in your household and anyone else you encounter.
                </p>
                <br />
                <p className="p-text">
                    So, if you have symptoms of the coronavirus, such as a fever and dry cough, you should move past your fears of that long swab and get the test performed. You may feel a bit of discomfort for five seconds, but then again, your viral symptoms may have you feeling so miserable that a little nasal cavity tickling won’t matter much.
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

export default doesCovid19TestHurt