import Link from "next/link"
import Head from "next/head"
import Layout from "../components/Layout"

const howCovidTestIsDone = () => {
    return (
        <Layout>
            <Head>
                <title>How COVID test is done</title>
                <meta name="description" content="Learn more about viral tests and antibody tests, how they work, if you should get tested and much more."></meta>
            </Head>
            <div className="updated-main-div">
                <h1>How Covid19 testing works</h1>
            </div>

            <div className="text-div">
                <p className="p-text">
                    First of all, there are two kinds of test available for Covid19: viral tests and antibody tests. A viral test tells you if you have a current infection. An antibody test might tell you if you had a past infection.
                </p>
                <br />
                <p className="p-text">
                Antigen tests are known to be less sensitive than viral tests. These COVID tests perform best with people in the early stages of COVID-19 infection, when viral load is the highest. No test is completely accurate, which means that some cases will be missed (false negatives) and some people will be told they have the virus when they don’t (false positives).
                </p>
                <br />
                <p className="p-text">
                    Who should get tested for Coronavirus: People who have symptoms of COVID-19. People who have had close contact with someone with confirmed COVID-19. People who have taken part in activities that put them at higher risk for COVID-19. People who have been asked or referred to get testing by their healthcare provider, local or state ​health department.
                </p>
                <br />
                <p className="p-text">
                    If you test positive, know what protective steps to take to prevent others from getting sick. If you test negative, you probably were not infected at the time your sample was collected. The test result only means that you did not have COVID-19 at the time of testing. Continue to take steps to protect yourself.
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

export default howCovidTestIsDone