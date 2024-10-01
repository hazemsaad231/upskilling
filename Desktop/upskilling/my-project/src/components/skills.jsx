import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


  
  const Skills = () => {
  
  
    return (
      <div className="text-black w-3/4 text-start flex justify-center flex-col items-center h-[100vh]">
        <div className="flex justify-center flex-col ml-[5vw]">
          <h1 className="text-md sm:text-md md:text-xl lg:text-xl font-serif">MY SKILLS</h1>
          <p className="text-gray-400 text-sm sm:text-sm md:text-md lg:text-md xl:text-lg w-[100%] sm:w-[100%] md:w-[80%] lg:w-[70%] p-1">
            I have a lot of skills as a front-end developer that include HTML, CSS, JS, TailwindCSS,
             and React. I also know other skills such as data structures, OOP, and basic C++ .and I studted a lot of other subjects as data mining, machine learning,data base and in the faculty of science.  
          </p>
          <div className="grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 ml-4 text-black font-thin text-md sm:text-md md:text-xl lg:text-xl gap-5  mt-10 w-[25vw]">
          <div className=''>
            <div >HTML</div>
            <Box >
            <Rating name="skill-rating" value={4} readOnly  />
            </Box>
          </div>

          <div className=''>
            <div>TypeScript</div>
            <Box>
            <Rating name="skill-rating" value={3} readOnly />
            </Box>
           
          </div>
          

          <div className=''>
            <div>CSS</div>
            <Box>
            <Rating name="skill-rating" value={4} readOnly />
            </Box>
          </div>
  
          
          <div>
            <div>Tailwind</div>
            <Box>
            <Rating name="skill-rating" value={4} readOnly />
            </Box>
          
          </div>

          <div className=''>
            <div>JavaScript</div>
            <Box>
            <Rating name="skill-rating" value={3} readOnly />
            </Box>
          </div>



          
  
          <div>
            <div>React</div>
            <Box>
            <Rating name="skill-rating" value={2} readOnly />
            </Box>
           
          </div>
        </div>
        </div>
  
     
      </div>
    );
  };
  
  export default Skills;
  