import { createContext, useReducer } from "react"
import { initialState, reducer } from "./reducer/UseReducer";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Screens/Register'
import Header from "./components/Screens/Header";
import Homepage from "./components/Screens/Homepage";
import Login from "./components/Screens/Login";
import Logout from "./components/Screens/Logout";

export const UsedContext = createContext();
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UsedContext.Provider value={{state,dispatch}}>
      <div>
        <Toaster
        position="top-center"
        toastOptions={{
          success:{
            theme:{
              primary:'#4aed88'
            }
          }
        }}
        />
      </div>

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path="/register" element={<Register/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </UsedContext.Provider>
  )
}

export default App
