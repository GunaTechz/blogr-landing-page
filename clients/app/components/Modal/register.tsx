"use client";
import { register } from '@/utils/register';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Register() {
    const [userData, setUserData] = useState({
        nickname: "",
        name: "",
        mobile : "",
        email: "",
        dob: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-red-300">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className='grid grid-cols-2'>
            {register.map((item: any, index: any) => (      
                <div className='m-2' key={index}>
                    <input 
                        className="border p-2 rounded-md"
                        onChange={(e) => setUserData({...userData, [item.id]: e.target.value})}
                        type={item.type}
                        placeholder={item.name}
                        />
                </div>
                        ))}
                </div>
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}
