import React from 'react'
import Image from 'next/image'
import { IProject } from '@/lib/projects'
import Link from 'next/link'
export default function HomeProjectCard({project}:{project:IProject}) {
    return (
        <div className=' border-[1px] border-[#ABB2BF] max-w-[30%]'>
            <Image src={project.image} alt='image here' width={430} height={280} />
            <div className='fira-code-light px-4 border-t-[1px] border-b-[1px] border-[#ABB2BF] py-2'>
                {project.skills.join(" ")}
            </div>
            <div className='px-6 py-6'>
                <h1 className='fira-code-medium text-[30px]'>{project.title}</h1>
                <h2 className='fira-code-light py-4'>{project.description}</h2>
                <div className='flex gap-4'>
                    <Link href={project.link}><button className='px-4 py-1 fira-code-medium border-[1px] border-[#ABB2BF] cursor-pointer'>Preview</button></Link>
                    <Link href={project.code}><button className='px-4 py-1 fira-code-medium border-[1px] border-[#ABB2BF] cursor-pointer'>Code</button></Link>
                </div>
            </div>
        </div>
    )
}
