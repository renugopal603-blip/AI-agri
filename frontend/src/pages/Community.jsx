import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, Users, MessageSquare } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      <nav className="glass sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 border-b border-gray-200 dark:border-gray-800">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-agri-green to-emerald-500 p-2.5 rounded-xl shadow-lg"><Leaf className="text-white w-6 h-6" /></div>
          <h1 className="text-2xl font-display font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-agri-green-deep to-emerald-500">SAMS</h1>
        </Link>
        <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-agri-green font-medium transition-colors"><ChevronLeft className="w-5 h-5 mr-1" /> Back to Home</Link>
      </nav>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center mb-16">
          <Users className="w-16 h-16 text-emerald-500 mb-6" />
          <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">Farmer's Forum</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Join the discussion. Share tips, ask questions, and connect with modern farmers.</p>
        </div>
        
        <div className="space-y-4">
          {[
            { title: "General Farming Discussions", topics: 1240, active: "5 mins ago" },
            { title: "SAMS AI Tool Help & Tips", topics: 856, active: "12 mins ago" },
            { title: "Market Prices & Negotiations", topics: 2130, active: "Just now" },
            { title: "Pest Control & Disease Management", topics: 945, active: "1 hour ago" }
          ].map((board, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-agri-bg-darkSurface p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow cursor-pointer gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-full text-agri-green shrink-0"><MessageSquare className="w-6 h-6" /></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{board.title}</h3>
                  <p className="text-gray-500 text-sm">{board.topics} Discussions</p>
                </div>
              </div>
              <div className="text-left sm:text-right pl-14 sm:pl-0">
                <p className="text-sm text-gray-500">Last active</p>
                <p className="font-medium text-gray-900 dark:text-gray-300">{board.active}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Community;
