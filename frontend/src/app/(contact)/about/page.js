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
                    <img className="ying-img anima-scaleUp"
                        src="/photo/Ying.jpeg"
                        alt="logo" />
                </div>

                <div className="shiba">
                    <Lottie className="anima-shiba" animationData={shiba} />
                    </div>


            </div>
        </article>
    )
}

export default About;