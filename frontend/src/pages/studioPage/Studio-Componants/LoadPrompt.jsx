
import {ClimbingBoxLoader} from 'react-spinners'
const LoadPrompt = ({setShowPrompt , animatedText}) =>{
return(
    <section className="open fixed w-full bg-black top-0 z-50 h-screen flex justify-center items-center overflow-hidden max-md:px-[2%]">
              <div className="w-1/2 max-md:w-full">
                 
      <div className="w-full h-[70vh]   border-[#252525] border-1 text-white  rounded-xl shadow-sm overflow-hidden">
        <div className='bg-[#525252] p-3'><span className=''>Loading prompt</span></div>
      <textarea
          className="w-full p-4 text-sm text-[#888]   border-[#252525] placeholder:text-gray-400 focus:outline-none resize-none h-full font-mono border  "
          value={animatedText}
          readOnly
        />
      </div>
      </div>
      <div className='fixed bottom-3 left-1/2 -translate-1/2'>
        <button onClick={()=>{setShowPrompt(false)}}  >
        <span className='w-12 h-12 group rounded-full border-1 border-[#252525] inline-flex justify-center items-center'>
          <span className='w-6 h-6  bg-gradient-to-r from-[#a75bff] to-[#0038db]  group-hover:bg-gradient-to-l rounded-sm inline-flex'></span>
        </span>
      </button>
      </div>
    </section>
)
}
export default LoadPrompt;