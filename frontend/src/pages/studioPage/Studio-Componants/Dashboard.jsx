import React, { useState , useEffect } from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import Suggestions from "./Suggestions"
const Dashboard = () => {
const [userInput , setUserInput] = useState("");
const [validInput , setValidInput] = useState("");
const [showPrompt , setShowPrompt] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [preview , setPreview] = useState(false); 
function sendInput(){
  if(userInput.trim().length > 3){
      setValidInput(userInput);
      setUserInput("");
      setShowPrompt(true);
  }
}
const homeSreenSuggestion ="Create a simple, clean webpage layout for a basic informational site.";
 const fullText = `Product Overview:
- Create a simple, clean webpage layout for a basic informational site.
- Focus on clarity, ease of navigation, and visual appeal.
- Suitable for presenting company info, services, or personal portfolio.

Interface Requirements:
- Header with logo and navigation menu (Home, About, Services, Contact).
- Main content area with sections for introduction, features, and testimonials.
- Footer with contact info, social media links, and legal notices.
- Responsive design for desktop and mobile views.

User Experience:
- Intuitive navigation with clear menu labels.
- Visual hierarchy emphasizing key sections.
- Consistent color scheme and typography for readability.
- Quick load times and accessible design.

Layout & Visual Elements:
- Top header fixed or sticky for easy access.
- Use of whitespace to separate sections.
- Clear headings and subheadings.
- Visual cues like icons or images to enhance content.
- Call-to-action buttons prominently placed.

Usability & Clarity:
- Simple, straightforward layout avoiding clutter.
- Clear labels and instructions.
- Mobile-friendly interface with touch-friendly elements.
- Consistent styling across all sections.

Core User Flows:
- Access homepage, navigate to different sections via menu.
- View detailed information in each section.
- Contact or connect via footer links or buttons.
- Responsive adjustments for different device sizes.

Design the main webpage screen with header, main content, and footer.
  `;



  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 10); // typing speed
      return () => clearTimeout(timeout);
    }
    else{
        setPreview(true);
    }
  }, [index]);

  return (
    <>
      <main className="flex-1  overflow-y-auto min-h-screen flex justify-center items-center">
          <section className="space-y-8 w-[700px]">
           
      <h1 className="text-3xl font-semibold text-white text-center">What should we design?</h1>
      <div className=" shadow-sm border  border-[#252525] pt-10 pb-4 px-4 rounded-3xl max-w-2xl mx-auto">
        <textarea
          onChange={(e)=>setUserInput(e.target.value)}
          className="w-full bg-transparent text-white  text-lg placeholder:text-gray-400 focus:outline-none resize-none h-24"
          placeholder="Describe design you need..."
          value={userInput}
        />
        <div className="flex justify-between items-center      pt-4   border-[#252525] border-t-1 ">
          <div className="text-sm">
         <select className="border-1  border-[#252525] text-white rounded-xl px-3 py-1 mr-2">
             <option>web</option>
              <option>mobile</option>
             </select>

  <button className="border-1  border-[#252525] text-white rounded-xl px-3 py-1 inline-flex justify-center items-center mr-1" >
            <span className="mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
  <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/>
</svg> </span> <span>Style</span></button>
          <button className="border-1  border-[#252525] text-white rounded-xl px-3 py-1 inline-flex justify-center items-center" >
            <span className="mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg> </span> <span>Reference</span></button>
          </div>
       <div className="flex items-center justify-center">
        <button
          className="text-white bg-gradient-to-r from-purple-400 to-gray-700 px-6 py-2 rounded-full text-sm inline-flex"
          onClick={sendInput}
        >
         <span className="mr-1">Generate </span> 
        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg></span>
        </button>
        </div>
         </div>
      </div>
      <Suggestions setUserInput={setUserInput}/>
    </section>

    <div className="fixed bottom-5 right-3">
      <button className="w-12 text-xl h-12 flex items-center justify-center bg-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-info" viewBox="0 0 16 16">
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></button>
    </div>
   </main>


   {/*** */}
    {showPrompt && <section className="open fixed w-full bg-black top-0 z-50 h-screen flex justify-center items-center overflow-hidden">
      <div className="w-1/2">
      <button onClick={()=>{setShowPrompt(false)}} className="absolute left-4 top-4 text-white">GO BACK</button>
      <div className="w-full h-[70vh]   bg-black text-white p-10 ">
      <textarea
          className="w-full p-4 text-sm text-white bg-[#1f1c1f] border-[#252525] placeholder:text-gray-400 focus:outline-none resize-none h-full font-mono border  rounded-xl shadow-sm"
          value={displayedText}
          readOnly
        />
      </div>
      {preview && <div className="text-center"> <Link to="/preview"           className="text-white bg-gradient-to-r from-purple-400 to-gray-700 px-6 py-2 rounded-full text-sm inline-flex">preview</Link></div>}
      <span className="loading loading-spinner text-white"></span>
      </div>
    </section>}
   
 </>
  );
};

export default Dashboard;
