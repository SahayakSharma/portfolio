'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {

  const pathname=usePathname();
  const router=useRouter();
  return (
    <div className='w-full py-8 flex justify-between items-center fira-code-light'>
      <section className='font-extrabold text-[20px]'>Sahayak</section>
      <ul className='flex gap-12 items-center font-medium'>
        <li style={{color:pathname==="/"?"white":"#ABB2BF",cursor:"pointer"}} onClick={()=>router.push("/")}>{`#home`}</li>
        <li style={{color:pathname==="/projects"?"white":"#ABB2BF",cursor:"pointer"}} onClick={()=>router.push("/projects")}>{`#works`}</li>
        <li style={{color:pathname==="/about-me"?"white":"#ABB2BF",cursor:"pointer"}} onClick={()=>router.push("/about-me")}>{`#about-me`}</li>
        <li style={{color:pathname==="/contacts"?"white":"#ABB2BF",cursor:"pointer"}} onClick={()=>router.push("/contacts")}>{`#contacts`}</li>
      </ul>
    </div>
  )
}
