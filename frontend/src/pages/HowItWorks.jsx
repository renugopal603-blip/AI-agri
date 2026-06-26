import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, MapPin, Cpu, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      <nav className="glass sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 border-b border-gray-200 dark:border-gray-800">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-agri-green to-emerald-500 p-2.5 rounded-xl shadow-lg"><Leaf className="text-white w-6 h-6" /></div>
          <h1 className="text-2xl font-display font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-agri-green-deep to-emerald-500">SAMS</h1>
        </Link>
        <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-agri-green font-medium transition-colors"><ChevronLeft className="w-5 h-5 mr-1" /> Back to Home</Link>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-display font-bold text-center text-gray-900 dark:text-white mb-16">How It Works</h1>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-agri-bg-darkSurface p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0"><MapPin className="w-12 h-12" /></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">1. Map Your Farm</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Start by dropping a pin on your location and entering your total acreage. SAMS immediately pulls regional soil data and 10-year historical weather patterns for your exact coordinates.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white dark:bg-agri-bg-darkSurface p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full text-blue-600 dark:text-blue-400 shrink-0"><Cpu className="w-12 h-12" /></div>
            <div className="text-left md:text-right">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">2. AI Analysis</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Our machine learning models cross-reference your farm's data with current market trends to determine the most profitable and climate-resilient crops to plant.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-agri-bg-darkSurface p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-full text-orange-600 dark:text-orange-400 shrink-0"><TrendingUp className="w-12 h-12" /></div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">3. Track & Harvest</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Follow the generated cultivation timeline. SAMS will send you alerts for when to irrigate, fertilize, and harvest, ensuring maximum yield and maximum profit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
