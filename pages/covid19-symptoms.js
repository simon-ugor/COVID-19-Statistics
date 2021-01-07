
import Link from "next/link"
import Head from "next/head"
import Layout from "../components/Layout"

const covid19symptoms = () => {
    return (
        <Layout>
            <Head>
                <title>COVID-19 Symptoms</title>
                <meta name="description" content="Everything you need to know about Coronavirus symptoms and how they differ from flu or cold."></meta>
            </Head>
            <div className="updated-main-div">
                <h1>Covid19 symptoms vs the flu or cold</h1>
            </div>
            <div className="text-div">
                <p className="p-text">
                    Fever, chills, body aches, and cough. All the symptoms seem the same for a cold, the flu, seasonal allergies, and coronavirus, also known as COVID-19. How do you know the difference? Here’s information to help you better understand the signs, symptoms, and treatments.
                </p>
                <br />
                <p className="p-text">
                    Covid19 symptoms: fever and/or chills, cought (usually dry), shortness of breath or difficulty breathing, tiredness, aches and pains, headaches, sore throat
                </p>
                <br />
                <p className="p-text">
                   Cold symptoms: runny or stuffy nose, caugh (mild), fatigue (sometimes), sneezing, watery eyes, sore throat, headaches (rarely), aches and pains
                </p>
                <br />
                <p className="p-text">
                   Flu symptoms: fever and/or chills, caugh (usually dry), fatigue, aches and pains, runny or stuffy nose (sometimes), sore throat (sometimes), diarrhea (sometimes)
                </p>
                <br />
                <p className="p-text">
                   Of course these symptoms can differ from person to person so please make sure to not panic instantly and consult with a doctor or Coronavirus hotline in your country.
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

export default covid19symptoms