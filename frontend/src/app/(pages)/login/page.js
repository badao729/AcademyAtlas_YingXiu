'use client';

import "./login.scss"
import NavButton from "../../components/navigation/navButton";
import loadingAnima from "../../../assets/animation/loading-animation.json"
import success from "../../../assets/animation/success-animation.json"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Lottie from "lottie-react"
import Link from "next/link";



export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
            setLoading(false)
        }

        getUser();
    }, [])

    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithPassword({
            email,
            password
        })
        setUser(res.data.user)
        router.refresh();
        setEmail('')
        setPassword('')
    }

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        setUser(null)
    }



    console.log({ loading, user })




    if (loading) {
        return (
            <>
                <Lottie className="anima-loading" animationData={loadingAnima} />
            </>
        )
    }

    if (user) {
        return (
            <div className="loading-container">
                <div className="loading-container-nav">
                    <img className="loading-container-nav-logo"
                        src="/icons/greenAll.png"
                        alt="logo" />

                    <div className="loading-container-nav-buttons">
                        <NavButton />

                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>

                <div className="logged-in">
                    <Lottie className="anima-success" animationData={success} />
                    <h1>You're already logged in</h1>
                </div>
            </div>
        )
    }



    return (
        <main className="login">
            <div className="loading-container-nav">
                <img className="loading-container-nav-logo"
                    src="/icons/greenAll.png"
                    alt="logo" />

                <div className="loading-container-nav-buttons">
                    <NavButton />
                    <Link href="/register">
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>

            <div className="form-container">
                <h2 className="form-title">Log in to AcademyAtlas</h2>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />

                <button onClick={handleSignIn}>Sign In</button>

                <h3 className="forgetPW">Forget Password?</h3>
                <div className="forgetPW-continue">
                    <h3 >Sorry, can't help you :D</h3>
                    <h3 >The function is still under construction.</h3>
                </div>
            </div>
        </main>
    )

}