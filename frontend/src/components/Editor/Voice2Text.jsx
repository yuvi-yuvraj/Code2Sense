import { useEffect } from "react";
import 'regenerator-runtime/runtime';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useState } from "react";
import { toast } from  "react-hot-toast";
 

const Voice2Text = () => {
    
    let [textToCopy, setTextToCopy] = useState();
    let [isCopied, setCopied] = useClipboard(textToCopy);

    const phraseToSymbolMap = {
        'semicolon': ';',
        'semi colon': ';',
        'comma': ',',
        'colon':':',
        'dot':'.',
        'open parentheses':'(',
        'close parentheses':')',
        'open round bracket':'(',
        'open roundbracket':'(',
        'close round bracket':')',
        'closed round bracket':')',
        'close roundbracket':')',
        'closed roundbracket':')',
        'open curly bracket':'{',
        'open curlybracket':'{',
        'close curlybracket':'}',
        'close curly bracket':'}',
        'open squarebracket':'[',
        'open square bracket':'[',
        'clsoe square bracket':']',
        'close squarebracket':']',
        'open single codes':"'",
        'open singlcodes':"'",
        'close single codes':"'",
        'closed single codes':"'",
        'close singlcodes':"'",
        'closed singlcodes':"'",
        'open double codes':'"',
        'open doublcuote':'"',
        'close double cuote':'"',
        'close doublcuote':'"'
    }

    const startListening = () => {
        toast.success("Start Speaking");
        toast.loading("Listening...", {duration:10})
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN'});
    }

    const processTranscript = (transcript) => {
        let processedTranscript = transcript;

        for(const [phrase, symbol] of Object.entries(phraseToSymbolMap)) {
                const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
                processedTranscript = processedTranscript.replace(regex, symbol);
            } 

            setTextToCopy(processedTranscript);
    };

    const { transcript,resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        processTranscript(transcript);
    }, [transcript]);

    if(!browserSupportsSpeechRecognition){
        return <span>Browser doesnt support speech recognition.</span>
    }

    const clearAll = () => {
        setTextToCopy("");
        resetTranscript();
        toast.success("Text Cleared")
    }

  return (
    <div className="relative bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-black text-white min-h-screen pt-16 sm:justify-center sm:pt-0 overflow-hidden h-[90vh] ">
      <div className="h-[90%] grid grid-cols-1">
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-6xl text-lavender font-bold mb-8">Voice to Text Converter</h1>
            <div className="mt-2 bg-white border-r-2 min-w-[50%] max-w-[80%] overflow-hidden h-[60%] grid grid-rows-1">
                <div className=" p-1 overflow-y-auto border-none w-[100%] bg-gray-400" onClick={()=>setTextToCopy(textToCopy)}>
                            <mark><h3 className='lowercase'>{textToCopy}</h3></mark>
                        </div>
                        <div className="flex justify-evenly items-center p-2">
                            <button className="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-purple-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none" onClick={startListening}>Start</button>
                            <button className="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-purple-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none" onClick={SpeechRecognition.stopListening}>Stop</button>
                            <button className="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-purple-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none" onClick={setCopied}>{isCopied ? "Copied" : "Copy"}</button>
                            <button className="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-purple-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none" onClick={clearAll}>Clear</button>
                        </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Voice2Text
