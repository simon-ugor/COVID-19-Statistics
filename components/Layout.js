import Heading from "./Heading.js"
import Footer from "./Footer.js"

const Layout = (props) => {
    return (
        <div className="App">
            <Heading />
            {props.children}
            <Footer />
            <div className="bg-div"></div>
        </div>
    )
}

export default Layout