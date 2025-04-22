import { Navbar,Intro } from '@/components'
import ProjectsHome from '@/components/ProjectsHome'
import React from 'react'

export default function Home() {
  return (
    <div className='w-[100%] h-screen px-60'>
      <Navbar/>
      <Intro/>
      <ProjectsHome/>
    </div>
  )
}
