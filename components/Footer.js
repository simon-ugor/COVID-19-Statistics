
import Link from "next/link"

const Footer = () => {
    return (
        <div className="footer-main-div">
            <Link href="aboutUs"><a className="link">About Us</a></Link>
            <Link href="contactUs"><a className="link">Contact Us</a></Link>
            <Link href="privacyPolicy"><a className="link">Privacy Policy</a></Link>
            <Link href="termsAndConditions"><a className="link">Terms and Conditions</a></Link>
        </div>
    )
}

export default Footer