import { useEffect, useState } from "react";


const Dashboard = ({userInput ,setUserInput , sendInput}) => {
const [disabled , setDisabled] = useState(false);

{/* disbale button when the input is < 3 */}
 function disablFunc(){
      if(userInput?.desc?.trim().length < 3) {
        setDisabled(true);
      } 
      else{
          setDisabled(false);
      }
 }

      useEffect(()=>{
        disablFunc();
      },[userInput])

      
  return (
    <>
 
      <section className="space-y-8    mx-auto">

        {/* title */}
      <h1 className="text-3xl font-semibold text-white text-center">
          What should we 
          <span className="relative">design?
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full">
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0038db" />
                        <stop offset="100%" stopColor="#a75bff" />
                      </linearGradient>
                     </defs>
                    <path
                      d="M0 10 Q 75 0, 150 10 T 300 10"
                      stroke="url(#grad)"
                      strokeWidth="4"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                </svg>
            </span>
     </h1>

     {/* userInput */}
      <div className=" shadow-sm border  border-[#252525] pt-10 pb-4 px-4 rounded-3xl max-w-3xl mx-auto relative">
                  <textarea
                    onChange={(e) => setUserInput(prev => ({ ...prev, desc: e.target.value }))}
                    className="w-full bg-transparent text-white  text-lg placeholder:text-gray-400 focus:outline-none resize-none h-24"
                    placeholder="Describe design you need..."
                    value={userInput.desc}
                  />
                <div className="flex justify-between items-center max-md:flex-col pt-4 border-[#252525] border-t-1 ">

                                  <div className="text-sm max-md:mb-4">
                                          {/*screen select */}
                                          <button  className="border border-[#252525] hover:bg-[#202020] text-white rounded-xl px-3 py-1 inline-flex justify-center items-center mr-2 appearance-none ">
                                                     <span className="mr-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bounding-box-circles" viewBox="0 0 16 16">
                                                          <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                                                        </svg>
                                                    </span> 
                                                    <span>
                                                      Web
                                                    </span>
                                          </button>
                                            {/*Style button */}
                                          <button className="border-1 hover:bg-[#202020] border-[#252525] text-white rounded-xl px-3 py-1 inline-flex justify-center items-center mr-1" >
                                                    <span className="mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
                                                            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
                                                        </svg> 
                                                    </span> 
                                                    <span>
                                                      Style
                                                    </span>
                                          </button>
                                          {/*Reference button */}
                                          <button className="border-1 hover:bg-[#202020] border-[#252525] text-white rounded-xl px-3 py-1 inline-flex justify-center items-center" >
                                                    <span className="mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
                                                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                                                      </svg> 
                                                  </span>
                                                <span>
                                                  Reference
                                                </span>
                                          </button>
                                  </div>

                                          {/*generate  button */}
                              <div className="flex items-center justify-center max-md:w-full relative">
                                        <button disabled={disabled} className={`text-white px-6 py-2 max-md:w-full max-md:justify-center bg-gradient-to-r from-[#a75bff] to-[#0038db] rounded-full text-sm inline-flex ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}  onClick={sendInput}>
                                              <span className="mr-1">Generate </span> 
                                              <span>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                                                      <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                                                </svg>
                                              </span>
                                        </button>
                              </div>
                </div>
      </div>

    </section>
  

  
 </>
  );
};

export default Dashboard;
