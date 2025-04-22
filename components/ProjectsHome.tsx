import { projectHome } from '@/lib/projects'
import Image from 'next/image'
import React from 'react'
import HomeProjectCard from './HomeProjectCard'

export default function ProjectsHome() {
    return (
        <div className='py-20'>
            <div className='flex items-center text-[30px] justify-between fira-code-medium'>
                <div className='flex w-[70%] items-center gap-2'>
                    <span className='flex'><p className='text-[#C778DD]'>{`#`}</p><p className=''>projects</p></span>
                    <div className='border-[#C778DD] border-[1px] flex-1 h h-fit'></div>
                </div>
                <p>view all {`-->`}</p>
            </div>

            <div className='flex gap-4 mt-20'>
                {
                    projectHome.map((project,index)=>{
                        return(
                            <HomeProjectCard project={project} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
