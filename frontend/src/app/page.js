'use client'

import "./Home.scss"
import Link from "next/link";
import Lottie from "lottie-react"
import arrow from "../assets/animation/arrow-animation.json"
import start from "../assets/animation/start-animation.json"



export default function Home() {


  return (
    <main className="home">

      <section className="home-nav">

        <div>
          <img className="home-nav-logo"
            src="/icons/greenAll.png"
            alt="logo" />

          <Link href="/login">
            <h2 className="home-nav-login">Log in</h2>
          </Link>
        </div>


        <div className="home-nav-group">
          <Link href="/calendar">
            <h2 className="home-nav-calendar">CALENDAR</h2>
          </Link>
          <Link href="/about">
            <h2 className="home-nav-about">ABOUT</h2>
          </Link>
          <Link href="/contact">
            <h2 className="home-nav-contact">CONTACT</h2>
          </Link>
        </div>

        <Link href="/register">
          <Lottie className="start-anima" animationData={start} />
        </Link>
      </section>

      <section className="hero">
        <img src="/photo/林丹22.jpg" alt="backgournd img" />
      </section>

      <section className="slogan">
        <div>
          <h1 className="front-quote">“</h1>
          <h3 className="slogan-text1">Beyond Limits</h3>
          <h3 className="slogan-text2">Beyond Learning.</h3>
          <h3 className="slogan-text3">- AcademyAtlas</h3>
          <h1 className="back-quote">”</h1>
        </div>
      </section>

    </main>
  );
}
