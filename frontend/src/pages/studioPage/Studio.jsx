
import Header from '../../Header.jsx';
import { useState , useContext , useEffect } from 'react';
import {MockupContext} from '../../GlobalState/MockupContext.jsx'
import Dashboard from './Studio-Componants/Dashboard.jsx'
import Suggestions from './Studio-Componants/Suggestions.jsx';
import LoadPrompt from './Studio-Componants/LoadPrompt.jsx';
import { useNavigate} from "react-router-dom";
import data from '../../data/responseLLM.json'
const Studio = ()=>{

const [userInput , setUserInput] = useState({desc: "" ,  staticUi : "" , promptLLM : "" });          {/*  userinput (descriptionn of the visualisationn) */}
const [showPrompt , setShowPrompt] = useState(false);     {/* to show the loading prrompt page */}
const [displayedText, setDisplayedText] = useState('');   
const [index, setIndex] = useState(0);
const {sharedData , setSharedData} = useContext(MockupContext);


function generateScript(desc){

  const matchedScript = data.find(elem => 
  desc.toLowerCase().includes(elem.keyword.toLowerCase())
);
  return  matchedScript;
}

function sendInput(){
  if(userInput.desc.trim().length > 0){
      const staticUi = generateScript(userInput.desc);
      setSharedData({desc: userInput.desc , staticUi : staticUi.script  , promptLLM :staticUi.promptLLM || "" });
      setUserInput({desc : "" , staticUi : "" , promptLLM : "" });
      setShowPrompt(true);
      setIndex(0);
  }
}

 



 const PromptLoadingText = sharedData?.promptLLM ;
 const navigate = useNavigate();
 
        useEffect(() => {
          if(!showPrompt)  return;

          else if (index < PromptLoadingText.length) {
            const timeout = setTimeout(() => {
              setDisplayedText(PromptLoadingText.slice(0, index + 1));
              setIndex(index + 1);
            }, 1000); 
            return () => {clearTimeout(timeout);  }
          }
          else{
              navigate("/preview");
          }
        }, [index, showPrompt]);
    return(
        <>
        <Header />
        <main className=" min-h-screen flex justify-center items-center bg-black max-md:mt-[10vh]">
           
            <div className='max-md:w-full max-xl:w-4/5 w-3/4 px-3  '>
                    <Dashboard userInput={userInput} setUserInput={setUserInput} sendInput={sendInput} />
                    <Suggestions setUserInput={setUserInput}/> {/** ready built in scripts */}
            </div>
          
            {/** load script with animation */}
            {showPrompt && 
                <LoadPrompt 
                        setShowPrompt={setShowPrompt}
                          animatedText={displayedText}
                />}
           
        </main>
        
        </>
    );
}
export default Studio;