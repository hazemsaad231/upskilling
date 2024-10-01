import '@fortawesome/fontawesome-free/css/all.min.css';




const About = () => {


    
    return (
        <div className="text-black w-3/4 font-serif h-[100vh] flex flex-col justify-center" >
          
            <div className="flex flex-col justify-center  m-5 sm:m-10 md:m-10 lg:m-20">

            <h1 className="text-gray-400 text-md sm:text-md md:text-lg lg:text-lg font-serif mb-2">About us</h1>
            <h5 className="text-start text-lg sm:text-lg md:text-xl lg:text-xl font-serif">WHO AM I?</h5>
            
            <p className="text-gray-400 text-sm sm:text-sm md:text-lg lg:text-lg w-[100%] sm:w-[100%] md:w-[80%] lg:w-[80%] mt-3">
               <span className='text-black'>My name is Hazem Saad</span> and I am a front-end developer. My age is 22.
                  I study in the Faculty of Science, Department of Computer Science.
                 I live in El-Bagour,Egypt I hope to be a full-stack developer in the future.
            </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-center ml-12 gap-5">

            <div className='border  h-auto flex flex-col justify-center items-center  border-b-black hover:bg-slate-100 p-1 shadow-2xl w-[60%]'> 
           <i className="fas fa-network-wired text-xl sm:text-xl md:text-3xl lg:text-2xl xl:text-3xl text-black mb-2"></i>
            <div className='text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl text-black'>Networking</div>
             </div>

             <div className='border h-auto flex flex-col justify-center items-center gap-5 border-b-yellow-600 hover:bg-yellow-100 shadow-2xl w-[60%]'> 
           <i className="fas fa-cogs  text-xl sm:text-xl md:text-3xl lg:text-2xl xl:text-3xl text-yellow-600"></i>
            <div className='text-md sm:text-md md:text-xl lg:text-xl xl:text-xl text-yellow-600'>Software</div>
             </div>

             <div className='border  border-b-red-500 h-auto  flex flex-col justify-center items-center gap-5 hover:bg-red-100 p-1 shadow-2xl w-[60%]'> 
           <i className=" fas fa-code text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-red-600"></i>
            <div className='text-md sm:text-md md:text-md lg:text-xl xl:text-xl text-red-600'>Web Development</div>
             </div>
            


</div>
        </div>
    )
}

export default About