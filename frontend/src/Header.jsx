import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-white text-gray-900 border-b-1">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold tracking-tight">XGENUI</div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        </nav>
        <div>
          <Link to='\studio' className="bg-black text-white px-5 py-2 rounded-xl text-sm hover:bg-gray-800 transition">
            Get Started
          </Link>
        </div>
      </div>

     
    </header>
  );
}
