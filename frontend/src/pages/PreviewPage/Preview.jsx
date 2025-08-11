import { useEffect, useRef, useState, useContext } from 'react';
import Navbar from './Preview-componants/Navbar';
import SettingsBar from './Preview-componants/settingsBar';
import Visual from './Preview-componants/Visual'

export default function Preview() {
  const [zoom, setZoom] = useState(100);


  return (
    <div className="flex items-center max-md:flex-col">
      <Navbar />
      <main className="w-full bg-[#323232] h-screen relative flex flex-col">
        <SettingsBar setZoom={setZoom} zoom={zoom} />
        <Visual zoom={zoom} />
      </main>
    </div>
  );
}
