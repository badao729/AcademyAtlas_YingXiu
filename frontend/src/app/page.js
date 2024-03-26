import "./Home.scss"
import Link from "next/link";



export default function Home() {
  return (
    <main className="home">
      <section className="nav">
        <h2 className="nav-login">Log in</h2>

        <div className="nav-group">
          <Link href="/about">
            <h2 className="nav-about">ABOUT</h2>
          </Link>
          <Link href="/contact">
            <h2 className="nav-contact">CONTACT</h2>
          </Link>
        </div>

        <button className="anima-scaleUp"><h2>Get started</h2></button>
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
