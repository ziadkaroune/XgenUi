import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";

const Dashboard = () => {
  return (
      <main className="flex-1 p-6 overflow-y-auto ">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold">Start creating</div>
          <FiBell className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        </div>

        {/* Creation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { title: "New blank project" },
            { title: "Generate with Autodesigner", badge: "Beta" },
            { title: "Start from screenshot" },
            { title: "Start from template" },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-[#121212] hover:bg-[#ebebeb] transition rounded-lg p-5 h-32 flex flex-col justify-between relative"
            >
              <div className="text-sm text-gray-100 font-medium">{card.title}</div>
              {card.badge && (
                <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded">
                  {card.badge}
                </span>
              )}
              <div className="text-2xl">+</div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Projects</h2>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#ebebeb] rounded-md px-3 py-2 pl-8 w-full text-sm placeholder-gray-400 text-white"
              />
              <FiSearch className="absolute top-2.5 left-2.5 text-gray-400" />
            </div>
            <select className="bg-[#ebebeb] text-white text-sm px-3 py-2 rounded-md">
              <option>Sort by: Newest first</option>
              <option>Oldest first</option>
            </select>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#ebebeb] rounded-lg p-4 hover:bg-[#ebebeb] transition">
              <div className="w-full h-40 bg-white rounded mb-4" />
              <div className="text-sm font-medium text-white mb-1">MockupGenerator</div>
              <div className="text-xs text-gray-400">Updated 6 hours ago</div>
            </div>
          </div>
        </div>
      </main>
 
  );
};

export default Dashboard;
