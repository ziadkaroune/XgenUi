import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ideas = [
  "A news website with a modern UX",
  "An AI-driven finance dashboard",
  "A portfolio site that adapts to mood",
  "An interactive learning platform",
  "A minimalist e-commerce concept"
];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [fullTextIndex, setFullTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = ideas[fullTextIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 60); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      const hold = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setFullTextIndex((prev) => (prev + 1) % ideas.length);
      }, 2500); // Hold before switching to next

      return () => clearTimeout(hold);
    }
  }, [charIndex, fullTextIndex]);

  return (
    <div className="text-center py-24 px-6 md:px-10 min-h-[90vh] flex justify-center items-center">
      <div>
      <h1 className="text-4xl md:text-6xl text-white font-semibold leading-tight mb-6 w-4/5 mx-auto">
        Turn product ideas into concepts instantly with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gray-700">XGENUI</span>
      </h1>
      <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10">
        Visualize, communicate, and iterate on wireframes and prototypes in minutes. Empower your product team with AI!
      </p>

      <div className="flex justify-center">
        <div className="w-[400px] border border-gray-300 flex h-12 rounded-2xl overflow-hidden text-sm text-gray-600 shadow-sm bg-white">
          <span className="w-[75%] flex items-center h-full px-4 whitespace-nowrap overflow-hidden">
            {displayText}
            <span className="animate-pulse text-black ml-1">|</span>
          </span>
          <Link to="/studio" className="bg-gradient-to-r from-purple-400 to-gray-700 text-white w-[25%] h-full hover:bg-gray-900 transition rounded-xl flex justify-center items-center">
            Generate
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
