import { useState } from "react"
import { toast } from "react-hot-toast"
import code from "../../assets/code.png"
import Tesseract from 'tesseract.js';

const Image2Text = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [imagePath, setImagePath] = useState("/code.png");
  const [text, setText] = useState("");

  const handleChange = (event) => {
    toast.success('File Added');
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }

  const handleClick = () => {
    toast.success("Convertig into Text...")
    setIsLoading(true);
    Tesseract.recognize(
      imagePath, 'eng',
      {
        logger: m => console.log(m)
      }
    )
    .catch(err => {
      console.error(err);
      toast.remove();
      toast.error("Please Check Internet Connection");
    })
    .then(result => {
      let confidence = result.data.confidence
     
      let text = result.data.text
      setText(text);
      console.log(confidence,text);
      toast.remove();
      toast.success("Image Converted");
      setIsLoading(false)
    })
  }


  const copyContent = ()=>{
    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard")
  }
 
  const clear = ()=>{
    toast.success("Output Cleared")
    const box = document.querySelector("#vtext");
    box.value = "";
  }

  return (
    <div className="relative bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black text-white min-h-screen pt-16 sm:justify-center sm:pt-0 overflow-hidden h-[90vh] ">
      <div className="h-[90%] grid grid-cols-1">
        <div className="flex justify-center items-center flex-col pt-20">
            <h1 className="text-4xl text-lavender font-bold">Voice to Text Converter</h1><br />
            <main className="w-[80%] bg-slate-300 h-[80vh] overflow-auto border-r-2 flex flex-col items-center p-1">
              <img src={imagePath} alt="img3" className=" min-w-[15%] m-5 h-[12rem]"/>
              <input type="file" onChange={handleChange} className="max-w-[90%] w-[50%] border border-black"/>
              <div className="flex flex-row items-center gap-6 p-2">
                <button className="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-purple-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none" onClick={copyContent}>Copy</button>
                <input className="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-purple-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none" type="submit" onClick={handleClick} value={isLoading? "Loading...": "Convert To Text"}/>
                <button className="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-purple-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none" onClick={clear}>Clear</button>
              </div>

              <div className="p-6 text-black text-[1.3rem]">
                <textarea className="w-[800px] h-[200px]" name="vtext" id="vtext" placeholder="Your Text Here" value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
              </div>
            </main>
        </div>
      </div>
    </div>
  )
}

export default Image2Text
