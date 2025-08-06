import { useContext, useState } from "react"
import { UsedContext } from "../../App"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {

    const {state, dispatch} = useContext(UsedContext);

    const history2 = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const loginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,
          password
        })
    })

    const data = res.json();
 
    if(res.status === 400 || !data){
      toast.error('Please Enter Valid Inputs');
    }
    else if(res.status === 401){
      toast.error("First Register Yourself");
    }
    else if(res.status === 402 ){
      toast.error("Wrong Password.");
    }
    else if(res.status === 403){
      toast.error("Please Fill The Details");
    }
    else{
      dispatch({type:'USER',payload:true});
      toast.success("Login Successfully");
      history2('/coding');
    }
  }

    return (
        <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
          <a href="#" className="text-white font-semibold text-2xl tracking-tight flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
            </svg>
              Login
          </a>

        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>

            <div className="mx-5 border border-white/20 dark:border-white/50 shadow-lg rounded-lg lg:rounded-xl">
              <div className="flex flex-col p-6">
                <h3 className="text-xl font-semibold leading-6 tracking-tight">Login</h3>
                  <p className="mt-1.5 text-sm text-white/50">Welcome back, enter your credentials to continue.</p>
              </div>

      <       div className="p-6 pt-0">
                <form>
                  {/* Username Field */}
                  <div className="group relative rounded-lg border px-3 pb-1.5 pt-2.5 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30 duration-200">
                  <div className="flex justify-between">
                      <label className="text-xs text-gray-400 group-focus-within:text-white font-medium">Username</label>
                  </div>
                  <input type="text"
                  name="username" 
                  placeholder="Username" 
                  autoComplete="off"
                  className="block w-full bg-transparent border-0 p-0 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-0 sm:leading-7"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  />
                  </div>

                 
          {/* Password Field */}
          <div className="mt-4 group relative rounded-lg border px-3 pb-1.5 pt-2.5 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30 duration-200">
            <div className="flex justify-between">
              <label className="text-xs text-gray-400 group-focus-within:text-white font-medium">Password</label>
            </div>
            <input type="password" 
            name="password"
            placeholder='********'
            autoComplete="off"
            className="block w-full bg-transparent border-0 p-0 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-0 sm:leading-7"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />
          </div>


          {/* Action Buttons */}
          <div className="mt-4 flex items-center justify-end gap-2">
            <a className="inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 hover:bg-white/10 transition-all border border-white/30 text-white" href="/register">Register</a>
            <button type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-semibold bg-white text-black px-4 py-2 hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300"
            onClick={loginUser}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default Login