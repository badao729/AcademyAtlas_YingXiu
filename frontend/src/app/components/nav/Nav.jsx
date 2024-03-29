import Link from "next/link";
import './nav.scss'



export default function Nav() {


    return (
        <section className="navigation">

            <Link href="/">
                <img className="navigation-logo"
                    src="/icons/whiteAll.png"
                    alt="logo" />
            </Link>
            
            <div className="button-container">
                <div>
                    <Link href="/"><button>HOME</button></Link>
                </div>
                <div>
                    <Link href="/calendar"><button>CALENDAR</button></Link>
                </div>
                <div>
                    <Link href="/students"><button>STUDENTS</button></Link>
                </div>
                <div>
                    <Link href="/tuition"><button>TUITION</button></Link>
                </div>
                <div>
                    <Link href="/about"><button>ABOUT</button></Link>
                </div>
                <div>
                    <Link href="/contact"><button>CONTACT</button></Link>
                </div>
            </div>

        </section>
    )
}