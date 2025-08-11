import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [option, setOption] = useState("styles");
  const [isOpen, setIsOpen] = useState(false); // mobile menu state

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden max-md:w-full bg-[#313131] text-white p-4 flex justify-between items-center shadow-lg">
        <div className="text-lg font-semibold">
          XGENUI<span className="text-purple-500">.</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white/10 rounded-lg focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-[#313131]/90 text-white fixed md:static top-0 left-0 h-screen w-[280px]  pt-10 px-6 shadow-xl flex flex-col justify-between transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Top Section */}
        <div className="space-y-8">
          <div className="text-xl sm:text-2xl font-semibold tracking-tight">
            <Link to="/" className="flex items-center relative pb-1">
              <span>
                XGENUI<span className="text-purple-500">.</span>
              </span>
              <span className="bg-purple px-1 text-xs">beta</span>
            </Link>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-pink-100 mb-1">
              Dashboard Container
            </h2>
            <p className="text-sm text-white/70">UI Panel</p>
          </div>

          <div className="flex flex-wrap gap-2 border-y border-[#888]/50 py-4">
            <button
              onClick={() => setOption("layers")}
              className={`px-3 py-1 text-xs rounded-full ${
                option === "layers" ? "bg-purple-500" : "bg-white/10"
              }`}
            >
              Layers
            </button>
            <button
              onClick={() => setOption("styles")}
              className={`px-3 py-1 text-xs rounded-full ${
                option === "styles" ? "bg-purple-500" : "bg-white/10"
              }`}
            >
              Styles
            </button>
          </div>

          <div>
            <ul className="space-y-2">
              {option === "styles" ? (
                <>
                  <h4 className="text-xs uppercase text-white/60 tracking-widest mb-2">
                    Theme Colors
                  </h4>
                  {["Background", "Border", "Primary", "Secondary"].map(
                    (item, idx) => (
                      <li
                        key={`style-${idx}`}
                        className="bg-white/10 hover:bg-white/20 transition-colors cursor-pointer px-3 py-2 rounded-lg text-sm text-white"
                      >
                        {item}
                      </li>
                    )
                  )}

                  <h4 className="text-xs uppercase text-white/60 tracking-widest mb-2">
                    Font
                  </h4>
                  {["Sora", "Arial", "Monument", "Impact"].map(
                    (font, idx) => (
                      <li
                        key={`font-${idx}`}
                        className="bg-white/10 hover:bg-white/20 transition-colors cursor-pointer px-3 py-2 rounded-lg text-sm text-white"
                      >
                        {font}
                      </li>
                    )
                  )}
                </>
              ) : (
                <>
                  {["Header", "Body", "Footer"].map((elem, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center bg-white/10 hover:bg-white/20 transition-colors cursor-pointer px-3 py-2 rounded-lg text-sm text-white"
                    >
                      <span>{elem}</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      </span>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
