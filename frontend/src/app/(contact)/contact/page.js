// import NavButton from "../../components/navigation/navButton"
'use client'

import "./contact.scss"
import Nav from '../../components/nav/Nav';
import Lottie from "lottie-react"
import tbc from "../../../assets/animation/TBC-animation.json"




const Contact = () => {
    return (
        <article className="contact">
            <Nav />
            <div className="contact-body">
            <Lottie className="anima-tbc" animationData={tbc} />

            </div>
        </article>
    )
}

export default Contact;