'use client'
import "./about.scss"
import Nav from '../../components/nav/Nav';
import Lottie from "lottie-react"
import shiba from "../../../assets/animation/shiba-animation.json"




const About = () => {
    return (
        <article className="about">
            <Nav />
            <div className="about-body">
                <div className="ying">
                    <div><img className="ying-img anima-scaleUp"
                        src="/photo/Ying.jpeg"
                        alt="logo" /></div>

                    <div className="intro">
                        <h2>Ying Xiu</h2>
                        <h3>Financial Analyst | Software Development | Graphic Design</h3>
                        <h4>As a Software Engineer with a distinctive blend of financial insight and design expertise.</h4>
                    </div>
                </div>

                <div className="shiba">
                    <Lottie className="anima-shiba" animationData={shiba} />
                    </div>


            </div>
        </article>
    )
}

export default About;