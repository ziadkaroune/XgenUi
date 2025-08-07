import referalIcom from '../../../assets/referral-icon.png'
import {Link} from 'react-router-dom'
const Navigator = ()=>{

    return(
                     <aside className=" h-screen w-[300px] flex flex-col justify-between border-r-1 pb-6 px-2  border-[#e5e7eb]">
                       <div>
                         <div className="text-xl font-bold mb-6 border-b-1 py-4  border-[#e5e7eb]">
                            <Link to="/">XgenUi</Link></div>
               
                         <nav className="space-y-4 text-sm text-gray-900 ">
                           <button className="navlink ">
                             Projects
                           </button>
                           <button  className="navlink">
                               Templates
                           </button>
                           <button  className="navlink">
                               Team
                           </button>
                           <button  className="navlink">
                               Brand <span className="text-xs bg-purple-600 px-1.5 py-0.5 rounded ml-1">Beta</span>
                           </button>
                           <button  className="navlink">
                               Learn
                           </button>
                         </nav>
                       </div>
               
                       {/* Footer */}
                       <div className="text-xs text-white mt-6">
                        <div className=" bg-purple-600 rounded-2xl h-48 p-4 flex justify-center items-center flex-col">
                                
                                <h5 className="mb-2 font-black">
                                Recommend Xgen ui 
                                </h5>
                                <h6>get 1 month Pro for free</h6>
                                <img src={referalIcom} className='w-16'/>
                                <button className=" text-white bg-purple-200 text-xs py-1 px-3 rounded">
                                Refer
                                </button>
                         </div>
                         <div className="mt-3 w-full h-1 bg-gray-600 rounded">
                           <div className="w-[69%] h-1  bg-purple-600 rounded" />
                         </div>
                         <div className="mt-1 text-black">273/400 components used</div>
                       </div>
                     </aside> 
  
    );

}
export default Navigator;