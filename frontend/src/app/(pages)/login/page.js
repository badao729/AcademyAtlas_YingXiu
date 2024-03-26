'use client';

import "./login.scss"
import NavButton from "../../components/navigation/navButton";


import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



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
        return <h1>loading..</h1>
    }

    if (user) {
        return (
            <div>
                <div>
                    <h1>
                        You're already logged in
                    </h1>
                    <button onClick={handleLogout}>Logout</button>
                    <NavButton/>

                </div>
            </div>
        )
    }

    return (
        <main>
            <NavButton />

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
            </div>
        </main>
    )

}