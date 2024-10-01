/* eslint-disable no-unused-vars */
import builder from "../assets/Screenshot 2024-09-28 123600.png";
import React from 'react';


const Projects = () => {
    return (
     
            <div className="flex flex-col items-center w-4/5 mt-4">
             
                <div className="relative right-[20%]">
                    <h3 className="text-gray-400 font-thin text-sm sm:text-md md:text-xl lg:text-xl xl-text-xl">My Projects</h3>
                    <h1 className="font-serif text-sm sm:text-md md:text-xl lg:text-xl xl-text-xl">PROJECTS</h1>
                    <br />

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 p-4 ">

                    <div className="project-container">
                    <img src='src/assets/Screenshot 2024-09-28 124435.png' alt='CRUD SYSTEM'  className=' w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-80 xl:h-80 mb2 m-auto' />
                        <div className="project-details">
                            <h3 className='text-red-600'>CRUD SYSTEM</h3>
                            <p>using html,css,js</p>
                        </div>
                    </div>
                    <div className="project-container">
                    <img src='src/assets/Screenshot 2024-09-28 123600.png' alt='Builde products'className=' w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-80 xl:h-80 mb2 m-auto'/>
                        <div className="project-details">
                            <h3 className='text-red-600'>Builder products</h3>
                            <p>ReactJs</p>
                        </div>
                    </div>
                    <div className="project-container">
                    <img src='src/assets/Screenshot 2024-09-28 124527.png' alt='E-commerce'  className=' w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-80 xl:h-80 mb2 m-auto'/>
                        <div className="project-details">
                            <h3 className='text-red-600'>E-commerce</h3>
                            <p>using html,css,js</p>
                        </div>
                    </div>

                     <div className="project-container">
                    <img src='src/assets/Screenshot 2024-09-28 124052.png' alt='XO Game'  className=' w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-80 xl:h-80 mb2 m-auto' />
                        <div className="project-details">
                            <h3 className='text-green-600'>XO Game</h3>
                            <p>using html,css,js</p>
                        </div>
                    </div>
                </div>
            </div>
      
    );
};

export default Projects;
