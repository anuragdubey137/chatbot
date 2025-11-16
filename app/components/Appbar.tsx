"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
   const session = useSession();

    return (
        <div className="flex justify-between p-2 bg-gray-500">
            <div className="font-extrabold py-2">chatbot</div>
            <div>
      {session.data?.user && <button className="m-2 p-2 bg-blue-400"onClick={()=>signOut()}>logout</button>}
      {!session.data?.user && <button className="m-2 p-2 bg-blue-400"onClick={()=>signIn()}>signIn</button>}
       </div>
        </div>
    )
}