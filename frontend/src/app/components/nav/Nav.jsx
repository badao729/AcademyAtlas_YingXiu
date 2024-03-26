import Link from "next/link";
import './nav.scss'



export default function Nav() {

    
    return (
        <section className="nav">
            <div>
                <Link href="/">HOME</Link>
            </div>
            <div>
                <Link href="/calendar">CALENDAR</Link>
            </div>
            <div>
                <Link href="/students">STUDENTS</Link>
            </div>
            <div>
                <Link href="/tuition">TUITION</Link>
            </div>
            <div>
                <Link href="/about">ABOUT</Link>
            </div>
            <div>
                <Link href="/contact">CONTACT</Link>
            </div>

        </section>
    )
}