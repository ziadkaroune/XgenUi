import { useState  } from "react";
import data from '../../../data/suggestions.json'

const Suggestions = ({setUserInput})=>{

const [moresuggestion , setMoresuggestion] = useState("close");


return(
        <section className="flex justify-center max-w-2xl mx-auto gap-3 mt-5 flex-wrap text-sm text-[#888]">

        <span className="border  border-[#252525] px-4 py-1 rounded-full bg-gray-50 transition">Try this</span>

        {/* first 4 suggestions */}
          {data?.slice(0, 4).map((prompt ,index)=>(
                        <button 
                              key={index}
                              onClick={()=>setUserInput(prompt)}
                              className="border  border-[#252525] px-4 py-1 rounded-full hover:bg-gray-50 transition">

                                {prompt.keyword}
                                
                          </button>
                      
          ))}

        {/*More Button */}
        <button 
              onClick={()=>setMoresuggestion((a)=> a === "open" ? "close" : "open")}
               className={`border  border-[#252525] px-4 py-1 rounded-full
                hover:bg-gray-50 transition ${moresuggestion === "open" ? "hidden" : "flex" } `} >
                More ⋯
       </button>

         {/* remaining suggestions */

          moresuggestion === "open" && (
          <>
          {data?.slice(4, data.length ).map((prompt ,index)=>(
                        <button 
                              key={index}
                               onClick={()=>setUserInput(prompt)}
                                className="border 
                                           border-[#252525] 
                                           px-4 py-1 
                                           rounded-full
                                            hover:bg-gray-50 
                                            transition">

                            {prompt.keyword}

                          </button>
          ))}
                  <button onClick={()=>setMoresuggestion((a)=> a === "open" ? "close" : "open")} className="border  border-[#252525] px-4 py-1 rounded-full hover:bg-gray-50 transition">less ⋯</button>
                  </>
        )
          }
        
      </section>
)
}
export default Suggestions;