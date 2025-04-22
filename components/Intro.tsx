import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Intro() {
  return (
    <main>
      <div className='flex py-18'>

        <div className='w-[50%]'>
          <section className='text-[30px] fira-code-bold flex gap-2 pt-20'>
            <p>Hi, my name is</p>
            <p className='text-[#C778DD]'> Sahayak Sharma</p><p> and</p>
          </section>
          <section className='text-[30px] fira-code-bold flex gap-2'>
            <p>I am a</p>
            <p className='text-[#C778DD]'>full-stack developer</p>
          </section>
          <p className='kanit-light text-[#ABB2BF] py-10 text-[20px] fira-code-light'>
            I am a B.Tech Computer Science final year student. building innovative full-stack applications
          </p>
          <Link href="https://drive.google.com/file/d/1SzEjzktRrzo6BYCEQqdvdGTB6LYqicfV/view?usp=sharing">
            <button className='px-4 py-2 cursor-pointer fira-code-light border-[1px] border-[#C778DD]'>{`Resume !!`}</button>
          </Link>
        </div>

        <div className='w-[50%] flex justify-end'>
          <div>
            <Image src={"/images/intro.png"} alt='image here' width={600} height={600} />
            <section className='border-[1px] border-[#ABB2BF] py-2 px-2 flex gap-2 fira-code-medium items-center'>
              <div className='w-[20px] h-[20px] bg-[#C778DD]'></div>
              <span className='flex gap-2 items-center'>
                <p className='text-[#ABB2BF]'>currently working on </p>
                <Link href="https://niyokta.vercel.app/dashboard" className='font-bold'>Niyokta</Link>
              </span>
            </section>
          </div>
        </div>
      </div>
      <div className='px-10 py-4 border-[1px] border-[#ABB2BF] mx-auto w-fit fira-code-light text-[20px] mt-10'>
        {`Code -- Break -- Fix -- Repeat`}
      </div>
    </main>
  )
}
