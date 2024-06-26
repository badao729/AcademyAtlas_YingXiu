'use client'
import Link from "next/link";
import './nav.scss';
import Lottie from "lottie-react";
import avatarAnima from "../../../assets/animation/avatar-animation.json";
import { useState, useEffect } from "react";



export default function Nav() {
    const [userName, setUserName] = useState("")


    useEffect(() => {
        const avatarUser = localStorage.getItem('user') || "";
        setUserName(avatarUser.slice(0, 8));
    }, []);


    const handleLogout = async () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            alert('You have been successfully logged out');
            setUserName("");
        } else {
            alert('You are not logged in yet. Please sign in or register.');
        }
    }


    return (
        <section className="navigation">

            <Link href="/">
                <img className="navigation-logo"
                    src="/icons/whiteAll.png"
                    alt="logo" />
            </Link>

            <div className="button-container">
                <div className="button-container-home">
                    <Link href="/"><button>HOME</button></Link>
                </div>
                <div className="button-container-calendar">
                    <Link href="/calendar"><button>CALENDAR</button></Link>
                </div>
                <div className="button-container-students">
                    <Link href="/students"><button>STUDENTS</button></Link>
                </div>
                <div className="button-container-tuition">
                    <Link href="/tuition"><button>TUITION</button></Link>
                </div>
                <div className="button-container-about">
                    <Link href="/about"><button>ABOUT</button></Link>
                </div>
                <div className="button-container-contact">
                    <Link href="/contact"><button>CONTACT</button></Link>
                </div>
                <div className="button-container-login">
                    <Link href="/login"><button>Login</button></Link>
                </div>

                <div className="nav-avater">
                    <Lottie className="nav-avater-animation" animationData={avatarAnima} />
                </div>

                <div className="button-container-logout">
                    <div className="user-name">{userName}</div>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>

            </div>

        </section>
    )
}