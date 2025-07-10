import { NavLink } from 'react-router-dom';
import {gsap} from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useEffect } from 'react';

gsap.registerPlugin(Draggable);

const Errorpage = () => {

    useEffect(() => {
        Draggable.create('#dragg', { type: "x,y", edgeResistance: 0.65, bounds: {left:50, top:50}});
    }, []);

    document.addEventListener('mousemove', function(details){
        document.querySelectorAll("h1").forEach((elem) => {
            const position = elem.getAttribute("value");
            var x = (window.innerWidth - details.clientX * position)/100;
            var y = (window.innerHeight = details.clientY * position)/100;

            elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    })
  return (
    <div className="relative bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black text-white min-h-screen pt-16 sm:justify-center sm:pt-0 overflow-hidden flex justify-center items-center flex-wrap">
        <div className="border border-orange-300 p-16 rounded-2xl flex flex-col justify-center items-center shadow-2xl shadow-orange-300 bg-black">
            <h1 value="7" className="text-8xl text-orange-400 font-bold" >404</h1><h3 className='font-bold text-2xl'>The page you are looking for is out to <span className="text-2xl text-gray-400 font-bold"> lunch.</span></h3>
            <h3 className='font-bold text-4xl'>Please come back later.</h3>
            <NavLink className="mt-8 " to='/'><button className="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">Back to Home</button></NavLink>
        </div>
    </div>
  )
}

export default Errorpage
