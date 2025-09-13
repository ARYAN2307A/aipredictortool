import React from 'react';
import { Sprout } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-green-900 relative overflow-hidden">
      {/* Starfield Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #ffffff, transparent), radial-gradient(2px 2px at 40px 70px, #ffffff, transparent), radial-gradient(1px 1px at 90px 40px, #ffffff, transparent), radial-gradient(1px 1px at 130px 80px, #ffffff, transparent), radial-gradient(2px 2px at 160px 30px, #ffffff, transparent)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Sprout className="w-8 h-8 text-green-400" />
          <span className="text-2xl font-bold text-green-400">AgriAI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">Home</a>
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">Features</a>
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">About</a>
          <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">Contact</a>
        </nav>

        {/* Get Started Button */}
        <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 text-center min-h-[calc(100vh-200px)]">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-green-400 mb-6 leading-tight">
          Website under development
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 font-light">
          Stay tuned!
        </p>
      </main>

      {/* Footer Badge */}
      <div className="relative z-10 flex justify-end p-8">
        <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          Made in Bolt
        </div>
      </div>
    </div>
  );
}

export default App;