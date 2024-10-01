/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './home.module.css'


const ComponentA = () => {
  return (
    <div className={style.ComponentA}>
      <div className='font-serif p-2 absolute left-4/6 sm:left-1/3 md:left-1/3 lg:left-1/3 xl:left-1/3 top-1/3 sm:top-1/3 md:top-1/3 lg:top-1/3 xl:top-1/3'>
      <div className='text-md sm:text-md md:text-3xl lg:text-5xl xl:text-6xl'>
      <h1>I am</h1>
      <h1> Devolper</h1>
      </div>
     
      <button className='border rounded-full border-black bg-zinc-200 text-black text-md sm:text-md md:text-base lg:text-lg xl:text-3xl  px-1 mt-5 hover:bg-transparent'>veiw portfolio <i className="fas fa-eye"></i></button>
      </div>
      </div>
     
  );
};

const ComponentB = () => {
  return (
    <div className={style.ComponentB}>
       <div className='font-serif rounded-full p-2 absolute left-4/6 sm:left-1/3 md:left-1/3 lg:left-1/3 xl:left-1/3 top-1/3 sm:top-1/3 md:top-1/3 lg:top-1/3 xl:top-1/3'>
       <div className='text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl'>
      <h1>Hi!</h1>
      <h1> I am Hazem </h1>
      </div>
       
      <button className='border border-black rounded-full bg-zinc-200 text-black text-md sm:text-md md:text-base lg:text-lg xl:text-3xl  px-1 mt-5 hover:bg-transparent'>Download CV <i className="fas fa-download"></i></button>
        
      </div>
      
    </div>
  );
};



const Home = ()=>{

    const [current,setCurrent] = useState('A');

    useEffect(()=>{
        const toggle = ()=>{
           setCurrent(prev=>prev==='A'?'B':'A')
        }
       const interval = setInterval(toggle,2000);

       return ()=>{
           clearInterval(interval);
       }
    },[])
    


    return(
        <div className="text-black w-3/4 text-start ">
            {current === 'A'? <ComponentA/>:<ComponentB/>}
        </div>
    )

} 
export default Home



