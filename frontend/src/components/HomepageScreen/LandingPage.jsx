import Spline from '@splinetool/react-spline';
import { NavLink } from 'react-router-dom';

function LandingPage(){
    return(
        <div className="flex flex-col lg:mt-20 lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] mb-16">
            <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-orange-300 tracking-wider my-8'>Code2Sense</h1>
                <p className='text-base sm:text-lg tracking-wide text-gray-400 max-w-[25rem] lg:max-w-[30rem] pb-10'>Code2Sense compiles multiple languages, converts voice to text, and extracts text from images for easier coding and productivity.</p>
                <NavLink className="mt-8" to='/coding'><button className="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">Let's Start</button></NavLink>
            </div>
            <Spline className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/lBF4UqUdjle07-1c/scene.splinecode"/>
        </div>
    )
}

export default LandingPage