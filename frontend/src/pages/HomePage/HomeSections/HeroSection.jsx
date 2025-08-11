import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ideasPrompt = [
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
    const currentText = ideasPrompt[fullTextIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const hold = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setFullTextIndex((prev) => (prev + 1) % ideasPrompt.length);
      }, 2500);
      return () => clearTimeout(hold);
    }
  }, [charIndex, fullTextIndex]);

  return (
    <section className="flex justify-center items-center min-h-[90vh] px-4 sm:px-6 md:px-10 py-16 text-center">
      <div className="w-full max-w-6xl">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white font-semibold leading-tight mb-6 mx-auto max-w-4xl">
          Transform bright ideas into visuals instantly with{" "}
          <span className=" relative ">
            XGENUI
             <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 20"
    className="absolute -bottom-2 left-0 w-full"
  >
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

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg xl:text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10 px-2">
          Visualize, communicate, and iterate on wireframes and prototypes in minutes. Empower your product team with AI!
        </p>

        {/* Input + integrated button */}
        <div className="max-w-lg mx-auto w-full">
          <div className="flex items-center border border-gray-300 rounded-2xl bg-white shadow-sm overflow-hidden h-12 sm:h-14 text-sm sm:text-base text-gray-600 focus-within:ring-2 focus-within:ring-purple-400 transition">
            
            {/* Typing text */}
            <div className="flex-1 flex items-center px-4 overflow-hidden">
              <span className="truncate">{displayText}</span>
              <span className="animate-pulse text-black ml-1">|</span>
            </div>

            {/* Button */}
            <Link
              to="/studio" 
              className="h-full px-4 sm:px-6 bg-gradient-to-r from-[#a75bff] to-[#0038db] text-white flex items-center justify-center hover:from-[#0038db] hover:to-[#a75bff] transition whitespace-nowrap"
            >
              <span className="mr-1">Generate</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-stars"
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
