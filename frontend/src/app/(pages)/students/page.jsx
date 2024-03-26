'use client'
import NavButton from "../../components/navigation/navButton"
import Logout from "../../components/logout/logout"
import { cookies } from 'next/headers'

export default  async function Students (){

    // const cookieStore = cookies();
    // const supabase = createServerComponentClient({cookies: () => cookieStore});
  
    // const {data: {user}} = await supabase.auth.getUser()
  
    // if (!user){
    //   return (
    //   <main>
    //       <Link href={'/login'}>
    //         You are not logged in. Click here to go login.
    //       </Link>
    //     </main>
    //   )
    // }
  



    return (
        <>
        <NavButton />
        <Logout />
        <div>Students</div>
        </>
    )
}