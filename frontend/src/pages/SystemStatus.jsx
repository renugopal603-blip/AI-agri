import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, CheckCircle2 } from 'lucide-react';

const SystemStatus = () => {
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
        <div className="bg-emerald-500 text-white p-8 md:p-10 rounded-3xl shadow-lg mb-12 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          <CheckCircle2 className="w-16 h-16 shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">All Systems Operational</h1>
            <p className="text-emerald-100 text-lg">Last updated: Just now. No current incidents.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Service Uptime</h2>
        <div className="bg-white dark:bg-agri-bg-darkSurface p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-8">
          {[
            { name: "Core API", uptime: "99.99%" },
            { name: "AI Recommendation Engine", uptime: "100%" },
            { name: "Weather Data Sync", uptime: "99.98%" },
            { name: "Web Dashboard", uptime: "100%" }
          ].map((service, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 dark:text-white text-lg">{service.name}</span>
                <span className="text-emerald-500 font-mono font-bold">{service.uptime}</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-full rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SystemStatus;
