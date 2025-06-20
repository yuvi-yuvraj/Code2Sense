import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { UsedContext } from '../../App';

function Header() {

    const { state, dispatch } = useContext(UsedContext);

    const RenderMenu = ()=> {
        if(state){
            return(
                <>
                <NavLink to='/logout' className="flex items-center gap-2.5 hover:opacity-80 transition-all text-white"><button
                className="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">  
                    Logout
                </button></NavLink>
                </>
            )
        }
        else{
            return (
                <>
                <NavLink to='/login' className="flex items-center gap-2.5 hover:opacity-80 transition-all text-white"><button
                className="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                Login
                </button></NavLink>

                <NavLink to='/register' className="flex items-center gap-2.5 hover:opacity-80 transition-all text-white"><button
                className="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                Register
                </button></NavLink>
                </>
            )
        }
    }

    return (
        <header className="bg-black fixed w-full top-0 z-40 backdrop-blur-lg text-white">
            <div className="container mx-auto px-4 h-16">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-8">
                        <NavLink to='/' className="flex items-center gap-2.5 hover:opacity-80 transition-all text-white text-lg font-bold">
                        <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                            <img src="code.png" alt="chat" className="w-8 h-8 text-primary"/>
                        </div>
                        Code2Sense
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-6">
                        <RenderMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header