
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";



export default function Logout () {
    const supabase = createClientComponentClient();


    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        router.push('/');
        setUser(null)
    }

    return (
        <button onClick={handleLogout}>
            <h2>Logout</h2>
        </button>)

}