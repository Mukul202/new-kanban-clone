import React, { useState } from 'react'
import { AddSquare2, Home, Message2, Profile, Lamp, Setting, Task, Dots } from '../static/icon';
import { dummyProjects } from "../data/KanbanData";

import { Bullet } from "./ui/Bullet";

const sideBarItems= [
    {
        title:"Home",
        src:Home
    },
    {
        title:"Messages",
        src:Message2
    },
    {
        title:"Tasks",
        src:Task
    },
    {
        title:"Members",
        src:Profile
    },
    {
        title:"Settings",
        src:Setting
    },
]

const Sidebar = ({ showSidebar }) => {
    const projects=dummyProjects;
    const [currentProject, setCurrentProject] = useState(dummyProjects[0]);

    return (
            <div className={`sticky top-0 min-h-screen ${showSidebar ? 'w-64 border-r' : 'hidden'}`}>
                
                <main>
                    {/* Navbar */}
                    <ul className='my-0 mx-[13px] py-[30px] px-0 flex flex-col gap-[15px] border-b border-b-grey-light-1'>
                        {sideBarItems.map(sideBarItem => (
                            <li className='flex px-2 text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer hover:bg-blue hover:bg-opacity-[0.08] rounded-[6px]'>
                                <img className='py-2' src={sideBarItem.src} alt={sideBarItem.src} />
                                <span className="hidden sm:block py-2">{sideBarItem.title}</span>
                            </li>
                        ))}
                    </ul>

                    {/* MyProjects */}
                    <div className='my-8 px-4'>
                        <header className='hidden sm:flex justify-between items-center mb-5 mx-2'>
                            <span className='text-xs font-bold text-grey uppercase'>MY PROJECTS</span>
                            <span className='cursor-pointer'><img src={AddSquare2} alt={AddSquare2} /></span>
                        </header>
                        <div className='hidden sm:flex flex-col gap-[10px] w-[14.0625rem]'>
                            {projects.map((project,index) => (
                                <button key={project.id}
                                onClick={() => setCurrentProject(projects[index])}
                                    className={`inline-flex justify-between px-3 items-center h-[2.4375rem] hover:bg-blue hover:bg-opacity-[0.08] rounded-[6px] cursor-pointer ${project.id === currentProject.id && 'bg-blue bg-opacity-[0.08]'
                                        }`}
                                >
                                    <span className='inline-flex gap-4 items-center'>
                                        <Bullet color={project.favColor} />
                                        <span className={`text-sm font-medium ${project.id===currentProject.id ? 'text-pure-black font-semibold':'text-grey'}`}>{project.name}</span>
                                    </span>
                                    {project.id === currentProject.id && (
                                        <span className=''>
                                            <img src={Dots} alt={Dots} />
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Thoughts */}
                    <div className='flex justify-center mt-16 pb-6'>
                        <div className='hidden sm:block relative w-[12.875rem]'>
                            <div className='mx-auto flex w-[4.125rem] aspect-square justify-center items-center bg-dusky-white rounded-full'>
                                <span className='absolute rounded-full w-[4.125rem] aspect-square bg-lamp-yellow bg-opacity-50 blur-lg'></span>
                                <img src={Lamp} alt={Lamp} className='w-6 aspect-square object-contain' />
                            </div>
                            <div className='flex flex-col -mt-[2rem] pt-8 bg-dusky-white items-center gap-2 rounded-2xl w-full'>
                                <h2 className='text-sm font-medium text-pure-black pt-3'>Thoughts Time</h2>
                                <p className='text-xs font-normal text-grey text-center w-[10.375rem]'>
                                    We don't have any notice for you, till then you can share your
                                    thoughts with your peers.
                                </p>
                                <input type="text" placeholder='Write a message' className='text-center w-full px-3 py-3 placeholder:text-pure-black bg-white text-sm font-medium mb-5 rounded focus:outline-none' />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    )
}

export default Sidebar