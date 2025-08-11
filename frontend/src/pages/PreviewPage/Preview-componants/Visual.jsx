
import { useEffect, useRef, useState, useContext } from 'react';
import { MockupContext } from '../../../GlobalState/MockupContext';

const Visual = ({zoom})=>{
  const [error, setError] = useState(false);
  const { sharedData } = useContext(MockupContext);
  const visualScript = sharedData?.staticUi || "error";  
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef(null);

  // Simulate loading delay
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100); 
    return () => clearTimeout(timer);
  }, [visualScript]);

  // Load html into iframe using Blob url
  useEffect(() => {
    if (visualScript === "error") {
      setError(true);
      return;
    }
    if (!loading && !error && iframeRef.current) {
      const blob = new Blob([visualScript], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      iframeRef.current.src = url;

      return () => URL.revokeObjectURL(url);
    }
  }, [loading, visualScript, error]);

    return(
     <div className="flex-1 bg-black flex justify-center items-center overflow-hidden">
          <div
            className="w-[80%] flex flex-col"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
          >
            <div className="flex justify-between text-purple-300 mb-2 text-sm">
              <h3>screen 1</h3>
            </div>
            <div className="flex flex-nowrap">
              <div className="bg-[#323232] h-[80vh] flex-1 mr-1 flex justify-center items-center relative">
                {error && <h1 className="text-white w-3/5">
                   Heads up! XgenUi is in beta, so some visuals might not load perfectly while we’re busy crafting the best experience. Thanks for your patience — and here’s a quick trick: use the suggestions to get the most out of the app during this early phase!
                  </h1>}
                {!error && loading && <div className="loading-screen"></div>}
                {!error && !loading && (
                  <iframe
                    ref={iframeRef}
                    className="w-full h-full border-0"
                    title="Preview"
                  />
                )}
              </div>
              <div className="bg-black transform h-[500px] relative"></div>
            </div>
          </div>
        </div>
    )
}
export default Visual ;

