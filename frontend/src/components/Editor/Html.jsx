import html from "../../assets/html.png"
import js from "../../assets/js.png"
import css from "../../assets/css.png"
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from "react";

const Html = () => {

    const html_code = useRef(null);
    const css_code = useRef(null);
    const js_code = useRef(null);
    const result = useRef(null);
    const run_button = useRef(null);

    useEffect(() => {
        const run = () => {
            localStorage.setItem('html_code', html_code.current.value);
            localStorage.setItem('css_code', css_code.current.value);
            result.current.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>`+localStorage.html_code;
        }

        const jsrun = () => {
            toast.success("saved");
            localStorage.setItem('js_code', js_code.current.value);
            result.current.contentWindow.eval(localStorage.js_code);
        }

        html_code.current.onKeyup = () => run();
        css_code.current.onKeyup= () => run();

        run_button.current.onKeyup = () => jsrun();

        html_code.current.value = localStorage.html_code;
        css_code.current.value = localStorage.css_code;
        js_code.current.value = localStorage.js_code;
    }, []);
    
  return (
    <div className=" bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black text-white min-h-screen pt-16 sm:justify-center sm:pt-0 overflow-hidden h-[90vh] ">
      <div className="">
        <div className="">
            <div className="h-full w-full overflow-hidden flex flex-col sm:flex-row justify-center">
                <div className=" overflow-auto pt-16 pl-16 max-w-[800px] w-[700px] max-h-[1080px] h-[900px]">
                    <div className="flex gap-4">
                        <img src={html} alt="" className="w-8 h-8" />
                        <h1 className="text-lavender font-bold text-2xl">HTML</h1>
                    </div>
                    <div>
                        <textarea className="w-[100%] h-[180px] mt-2 rounded-lg text-black" data-testid="htmlTextarea" ref={html_code}></textarea>
                    </div>
                    <div className="flex gap-4">
                        <img src={css} alt="" className="w-8 h-8" />
                        <h1 className="text-lavender font-bold text-2xl ">CSS</h1>
                    </div>
                    <div>
                        <textarea className="w-[100%] h-[180px] mt-2 rounded-lg text-black" data-testid="cssTextarea" ref={css_code}></textarea>
                    </div>
                    <div className="flex gap-4">
                        <img src={js} alt="" className="w-8 h-8" />
                        <h1 className="text-lavender font-bold text-2xl">JavaScript </h1>
                        <button data-testid="runButton" ref={run_button} className="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-1 rounded-lg
border-purple-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">RUN</button>
                    </div>
                    <div>
                        <textarea className="w-[100%] h-[180px] mt-2 rounded-lg text-black" spellCheck='false' ref={js_code}></textarea>
                    </div>
                </div> 
                <div className="pl-16 pt-16 max-w-[800px] w-[700px]">
                    <h1 className="text-lavender font-bold text-2xl">Output</h1>
                    <iframe data-testid="result" srcDoc={`<html><body>${html}</body></html>`} className="w-[95%] h-[640px] rounded-lg text-black bg-white pr-8"   ref={result}></iframe>
                </div>
            </div> 
            
        </div>
                
      </div>
    </div>
  )
}

export default Html
