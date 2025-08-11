import { useEffect, useRef, useState, useContext } from 'react';
import Navbar from './Preview-componants/Navbar';
import SettingsBar from './Preview-componants/settingsBar';
import { MockupContext } from '../../GlobalState/MockupContext';

export default function Preview() {
  const [zoom, setZoom] = useState(100);
  const [error, setError] = useState(false);
  const { sharedData } = useContext(MockupContext);
  const specificUiData = sharedData?.staticUi || "error";
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef(null);

  // Simulate loading delay
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // shorter load for dev
    return () => clearTimeout(timer);
  }, [specificUiData]);

  // Load HTML into iframe using Blob URL
  useEffect(() => {
    if (specificUiData === "error") {
      setError(true);
      return;
    }
    if (!loading && !error && iframeRef.current) {
      const blob = new Blob([specificUiData], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      iframeRef.current.src = url;

      return () => URL.revokeObjectURL(url);
    }
  }, [loading, specificUiData, error]);

  return (
    <div className="flex items-center max-md:flex-col">
      <Navbar />
      <main className="w-full bg-[#323232] h-screen relative flex flex-col">
        <SettingsBar setZoom={setZoom} zoom={zoom} />

        <div className="flex-1 bg-black flex justify-center items-center overflow-hidden">
          <div
            className="w-[80%] flex flex-col"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
          >
            <div className="flex justify-between text-purple-300 mb-2 text-sm">
              <h3>screen 1</h3>
            </div>
            <div className="flex flex-nowrap">
              <div className="bg-[#323232] flex-1 mr-1 flex justify-center items-center relative">
                {error && <h1 className="text-white">Oups something is wrong</h1>}
                {!error && loading && <div className="loading-screen"></div>}
                {!error && !loading && (
                  <iframe
                    ref={iframeRef}
                    className="w-full h-[80vh] border-0"
                    title="Preview"
                  />
                )}
              </div>
              <div className="bg-black transform h-[500px] relative"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
