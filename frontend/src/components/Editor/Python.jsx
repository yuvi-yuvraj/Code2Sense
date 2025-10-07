import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const Python = () => {
    // const [code, setCode] = useState('');
    // const [output, setOutput] = useState('');

    // const handleSubmit = async ()=> {
    //     toast.loading('Please wait while file is execusing');
    //     const payload = {
    //         language:"py",
    //         code
    //     };

    //     try {
    //         const respose = await fetch("http://localhost:5000/runpy",{
    //             method:'POST',
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify(payload)
    //         })
    //         const data = await response.json()
    //         if(respose.ok){
    //             toast.remove();
    //             setOutput(data.output);
    //             toast.success("Execution Successfully,");
    //         }
    //         else{
    //             setOutput(data.error);
    //             toast.remove();
    //             toast.error("An error Occured.");
    //         }
    //     } catch (error) {
    //         toast.remove();
    //         setOutput("Error in communication with the server")
    //         toast.error("Please Enter Valid Python Code");
    //         console.log(`error is in python.js .The error : ${err}`);
    //     }
    // }

    //     const clear = ()=>{
    //         toast.success('Output Cleared')
    //         const box = document.querySelector("#consoleOutput p");
    //         box.innerText = "";
    //     }

    //     const copyContent = ()=>{
    //         toast.success("Copied")
    //         navigator.clipboard.writeText(code);
    //     }

    //     const codeToFile = ()=>{
    //         toast.success('File is Downloading...')
    //         const text = document.querySelector('#python').value;
    
    //         const blob = new Blob([text],{type:"text/python"});

    //         const link = document.createElement("a");
    //         link.href = window.URL.createObjectURL(blob);
    //         link.download = "codofile-python.py";
    //         link.click();
    //     }

  return (
    <div className="relative bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black text-white min-h-screen pt-16 sm:justify-center sm:pt-0 overflow-hidden h-[90vh] ">
      <div></div>
    </div>
  )
}

export default Python
