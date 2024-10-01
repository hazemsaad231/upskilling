import{Link}from "react-router-dom"
const NavBar = () => {
    return (
        <>

        <div className="text-black bg-zinc-200 flex flex-col  w-6/16 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 h-[100vh]" id="NavBar">

        <div className='border flex flex-col m-10'>

        <img src='src/assets/about-BgAkqdr2.jpg' alt=''  className= 'rounded-full w-40 h-40 mb-16 m-auto' />

        <div className="text-center"> <h1 className="text-md sm:text-md md:text-xl lg:text-xl mb-1 font-serif">Hazem Mahisin</h1>
        <span className="text-md  sm:text-md md:text-md lg:text-md mb-4 text-gray-400 font-serif"><span className="text-cyan-500">Iam front end </span>devolper</span></div>

       
            <ul className=" flex flex-col m-auto text-center gap-6 mt-10 font-serif text-md sm:text-md md:text-md lg:text-md ">
                <li> <Link  to='home'  className="hover:text-cyan-500 hover:underline">Home</Link></li>
                <li> <Link  to='about' className="hover:text-cyan-500 hover:underline">About</Link></li>
                <li> <Link  to='skills' className="hover:text-cyan-500 hover:underline">skills</Link></li>
                <li> <Link to='projects' className="hover:text-cyan-500 hover:underline">projects</Link></li>
                <li> <Link  to='concact' className=" hover:text-cyan-500 hover:underline">experience</Link></li>

            </ul>
    
        </div>    
        </div>

        </>
    )
}

export default NavBar
