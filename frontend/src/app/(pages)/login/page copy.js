'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import NavButton from "../../components/navigation/navButton";
import Logout from "../../components/logout/logout"

import "./login.scss"



export default function LoginPage() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const [loginEmail, setLoginEmail] = useState(''); 
    const [loginPassword, setLoginPassword] = useState(''); 

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
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    position,
                    firstName,
                    lastName,
                },
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        });

        if (!error) {
            // 如果注册成功，更新用户信息
            await supabase.from('User').insert([
                { position, firstName,lastName },
            ]);
        }

        setUser(user);
        router.refresh();
        setEmail('');
        setPassword('');
        setPosition('');
        setFirstName('');
        setLastName('');
    }




    const handleSignIn = async () => {
        const { user, error } = await supabase.auth.signIn({
           email: loginEmail, 
            password: loginPassword, 
        });
      
        if (error) {
          alert('Login failed: ' + error.message);
        } else {
          // 登录成功，根据需要进行重定向或其他操作
          console.log('Login successful', user);
          router.push('/calendar');
        }
      };




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
    
                    <Logout />
                    <NavButton />
                </div>
            </div>
        )
    }

    return (
        <main>
            <NavButton />

            <div>
                <h2>Sign Up</h2>

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

                <select value={position} onChange={(e) => setPosition(e.target.value)}>
                    <option value="">Select Position</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                </select>

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

                <button onClick={handleSignUp}>Sign Up</button>
            </div>



            <div>
                <h2>Sign In</h2>

                <input 
                    type="email" 
                    value={loginEmail} 
                    onChange={(e) => setLoginEmail(e.target.value)} 
                    placeholder="Email" />

                <input 
                    type="password" 
                    value={loginPassword} 
                    onChange={(e) => setLoginPassword(e.target.value)} 
                    placeholder="Password" />

                <button onClick={handleSignIn}>Sign In</button>
            </div>
        </main>
    )

}