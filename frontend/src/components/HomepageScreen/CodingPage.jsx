import { NavLink } from 'react-router-dom'
import img0 from "../../assets/img0.jpg"
import img2 from "../../assets/img2.jpg"
import web from "../../assets/web.jpg"

const CodingPage = () => {
  return (
    <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black min-h-screen pt-16 pb-16  sm:justify-center sm:pt-0 overflow-x-hidden"> 
        <div className='h-full w-full flex flex-col items-center'>
          <h1 className='text-6xl font-bold text-lavender pt-24'>Voice To Text</h1>
        
            <div className='flex lg:flex-row flex-col gap-28 p-16 justify-center items-center'>
              <div className='flex flex-col text-white max-w-[580px]'>
                 <p className='text-white text-2xl'><span className='text-lavender text-2xl font-bold'>"Words Speak more than Actions" </span>let this quote get Install into your life by our latest tool <span className='text-lavender text-2xl font-bold'>Voice to Text</span> feature.</p>
                 <NavLink className="mt-8" to='/editor/voice2text'><button className="text-purple-400 hover:text-purple-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-purple-700 duration-700">Get Start</button></NavLink>
              </div>
              <div className='max-w-[600px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:brightness-110'>
              <img src={img0} alt="img1" className=''/>
              </div>
            </div>
          </div>

          <div className='h-full w-full flex flex-col items-center'>
          <h1 className='text-6xl font-bold text-lavender pt-24'>Image To Code</h1>
        
            <div className='flex lg:flex-row flex-col gap-28 p-16 justify-center items-center'>
              <div className='max-w-[600px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:brightness-110'>
              <img src={img2} alt="img2" className=''/>
              </div>
              <div className='flex flex-col text-white max-w-[580px]'>
                 <p className='text-white text-2xl'>Turn Your<span className='text-lavender text-2xl font-bold'> Image into Reality </span>with this amazing Feature of <span className='text-lavender text-2xl font-bold'>Image to Code</span> Tool.</p>
                 <NavLink className="mt-8" to='/editor/image2text'><button className="text-purple-400 hover:text-purple-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-purple-700 duration-700">Get Start</button></NavLink>
              </div>
              
            </div>
          </div>

          <div className='h-full w-full flex flex-col items-center'>
          <h1 className='text-6xl font-bold text-lavender pt-24'>Real-Time Website Editor</h1>
        
            <div className='flex lg:flex-row flex-col gap-28 p-16 justify-center items-center'>
              <div className='flex flex-col text-white max-w-[580px]'>
                 <p className='text-white text-2xl'>Bored Writing HTML codes in Editor then again and again refreshing Browser for Output?<span className='text-lavender text-2xl font-bold'> Try </span>our <span className='text-lavender text-2xl font-bold'>Real Time Browser</span> that Automatically updates the Page as per your Code/Program.</p>
                 <NavLink className="mt-8" to='/coding'><button className="text-purple-400 hover:text-purple-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-purple-700 duration-700">Get Start</button></NavLink>
              </div>
              <div className='max-w-[500px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:brightness-110'>
              <img src={web} alt="img1" className=''/>
              </div>
            </div>
          </div>

          <div className='h-full w-full flex flex-col items-center'>
          <h1 className='text-6xl font-bold text-lavender pt-24'>Image To Code</h1>
        
            <div className='flex lg:flex-row flex-col gap-28 p-16 justify-center items-center'>
              <div className='flex flex-col text-white max-w-[580px]'>
                 <p className='text-white text-2xl'><span className='text-lavender text-2xl font-bold'>"Words Speak more than Actions" </span>let this quote get Install into your life by our latest tool <span className='text-lavender text-2xl font-bold'>Voice to Text</span> feature .</p>
                 <NavLink className="mt-8" to='/coding'><button className="text-purple-400 hover:text-purple-700 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-purple-700 duration-700">Get Start</button></NavLink>
              </div>
              <div className='max-w-[500px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:brightness-110'>
              <img src={img0} alt="img1" className=''/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CodingPage
