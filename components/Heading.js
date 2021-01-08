import Link from "next/link"

const Heading = () => {
    return (
        <div className="heading-main-div">
            <div className="heading-left-div">
                <Link href="countries-stats">
                    <a className="link">Countries Stats</a>
                </Link>
            </div>
            <div className="heading-middle-div">
                <Link href="/"><h1 className="pointer-heading">COVID-19 Statistics</h1></Link>
            </div>
            <div className="heading-right-div">
                <Link href="frequently-asked-questions">
                    <a className="link">FAQ</a>
                </Link>
            </div>
        </div>
    )
}

export default Heading