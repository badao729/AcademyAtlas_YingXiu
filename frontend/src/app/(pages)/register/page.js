'use client';

import "./register.scss"
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

    const [position, setPosition] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

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


    const handleSignUp = async () => {
        const res = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
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
            <div>
                <div className="nav">
                    <img className="nav-logo"
                        src="/icons/greenAll.png"
                        alt="logo" />

                    <div className="nav-buttons">
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
        <main>
            <div className="nav">
                <img className="nav-logo"
                    src="/icons/greenAll.png"
                    alt="logo" />

                <div className="nav-buttons">
                    <NavButton />
                    <Link href="/login">
                        <button>Sign In</button>
                    </Link>
                </div>
            </div>

            <div className="form-container">
                <h2 className="form-title">Sign Up to AcademyAtlas</h2>
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

                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name" />

                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name" />

                <select value={position} onChange={(e) => setPosition(e.target.value)}>
                    <option value="">Select Position</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                </select>

                <button onClick={handleSignUp}>Sign Up</button>
            </div>


            {/* 
            <div>
                <h2>Sign In</h2>

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
            </div> */}
        </main>
    )

}