export type IProject={
    title:string,
    skills:string[],
    description:string,
    link:string,
    image:string,
    code:string
}

export const projectHome:IProject[]=[
    {
        title:"Niyota",
        skills:["Next","Express","Docker","AWS","PostgreSQL","ui/shadcn"],
        description:"Freelance Platform with Analytics",
        link:"https://niyokta.vercel.app",
        image:"/images/projects/niyokta.png",
        code:"https://github.com/Niyokta"
    },
    {
        title:"Zink",
        skills:["Next","WebRTC","Socket.io","Express","NginX","AWS","Clerk"],
        description:"Video Conferening Application",
        link:"https://videocallingapp-one.vercel.app/",
        image:"/images/projects/zink.png",
        code:"https://github.com/SahayakSharma/videocallingapp"
    }
]