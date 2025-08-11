
import {Link} from 'react-router-dom'
import { useEffect, useRef, useState , useContext } from 'react';
import Navbar from './Preview-componants/Navbar'
import SettingsBar from './Preview-componants/settingsBar'
import {MockupContext} from '../../GlobalState/MockupContext'

export default function Preview(){
    const [zoom , setZoom] = useState(100);
    const [error , setError] = useState(false);
      const {sharedData} = useContext(MockupContext);
      const specificUiData = sharedData?.staticUi || "error";
      const [loading , setLoading] = useState(true);
      const iframeRef = useRef(null);

      {/*wait a momeent before display the visual"*/}
      useEffect(() => {
        setLoading(true);
       const timer = setTimeout(() => setLoading(false), 10000);
         return () => clearTimeout(timer);
      }, [specificUiData]);
    
      {/* html (sharedData.staticUi) to iframe */}
      useEffect(() => {
        const iframe = iframeRef.current;
        if(specificUiData === "error"){
          setError(true);
          return ;
        }   
        if (iframe && iframe.contentDocument && !loading && !error ) {
          iframe.contentDocument.open();
          iframe.contentDocument.write(specificUiData);
          iframe.contentDocument.close();
        }
      }, [loading, specificUiData, error]);

    return(
        <>
        <div className="flex items-center max-md:flex-col">

                  <Navbar />
                  <main className="w-full bg-[#323232] h-screen relative">
                  <SettingsBar setZoom={setZoom} zoom={zoom} />
                    <div className="w-full h-full   bg-black  flex justify-center items-center">
                        <div className="w-[80%]" style={{ transform: `scale(${zoom / 100})` }}>
                            <div className='flex justify-between text-purple-300 mb-2 text-sm'>
                            <h3>screen 1</h3>
                            </div>
                            <div className='flex flex-nowrap '>
                                    <div className="bg-[#323232] transform h-[500px] flex justify-center items-center relative flex-1 mr-1">
                                    {error && <h1 className="">Oups something is wrong</h1>}
                                          {!error && loading && <div className="loading-screen"></div>}
                                          {!error && !loading && (
                                            <iframe ref={iframeRef} className="w-full h-full border" />
                                          )}
                                  </div>
                                      <div className="bg-black transform h-[500px] relative"></div>
                        </div>
                        </div>
                    </div>
                    </main>
                  </div>
        </>
    )
}