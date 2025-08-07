import { useState } from "react";
const Suggestions = ({setUserInput})=>{

const prompts = [
  { keyword: "ecommerce ui", desc: "Design a clean and modern e-commerce UI with product cards, filters, and a shopping cart panel." },
  { keyword: "dashboard", desc: "Create a responsive admin dashboard layout with key metrics, charts, and a sidebar navigation." },
  { keyword: "blog ux", desc: "Generate a user-friendly blog layout focusing on readability, post previews, and a featured article section." },
  { keyword: "finance app", desc: "Design a mobile-first finance app UI that shows account balance, recent transactions, and spending categories." },
  { keyword: "landing page", desc: "Create a high-converting SaaS landing page with a hero section, features, testimonials, and call-to-action." },
  { keyword: "portfolio site", desc: "Generate a personal portfolio website layout with project showcases, about section, and contact form." }
];


 const [moresuggestion , setMoresuggestion] = useState("open");
return(
          <div className="flex justify-center gap-3 flex-wrap text-sm text-[#888]">
        <span className="border  border-[#252525] px-4 py-1 rounded-full bg-gray-50 transition">Try this</span>
        <button onClick={()=>setUserInput("zabi")} className="border  border-[#252525] px-4 py-1 rounded-full hover:bg-gray-50 transition">Home screen</button>
        <button onClick={()=>setUserInput("Sign up form")} className="border  border-[#252525] px-4 py-1 rounded-full hover:bg-gray-50 transition">Sign up form</button>
        <button onClick={()=>setMoresuggestion((a)=> a === "open" ? "close" : "open")} className={`border  border-[#252525] px-4 py-1 rounded-full hover:bg-gray-50 transition ${moresuggestion === "open" ? "hidden" : "flex" } `}  >More ⋯</button>
        {moresuggestion === "open" && (
          <>
          {prompts.map((prompt ,index)=>(
                        <button key={index} onClick={()=>setUserInput(prompt.desc)} className="border  border-[#252525] px-4 py-1 rounded-full hover:bg-gray-50 transition">{prompt.keyword}</button>
          ))}
                  <button onClick={()=>setMoresuggestion((a)=> a === "open" ? "close" : "open")} className="border  border-[#252525] px-4 py-1 rounded-full hover:bg-gray-50 transition">less ⋯</button>
                  </>
        )
          }
        
      </div>
)
}
export default Suggestions;