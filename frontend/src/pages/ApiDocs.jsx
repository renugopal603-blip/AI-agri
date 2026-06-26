import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, Code } from 'lucide-react';

const ApiDocs = () => {
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
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-gray-900 p-4 rounded-xl"><Code className="w-8 h-8 text-emerald-400" /></div>
          <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white">API Documentation</h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Integrate SAMS's powerful agricultural intelligence directly into your own applications using our REST API.
        </p>
        
        <div className="bg-[#0f1713] rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-gray-900 px-6 py-4 border-b border-gray-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400 text-sm font-mono">POST /api/v1/recommendations</span>
          </div>
          <div className="p-6 text-emerald-400 font-mono text-sm overflow-x-auto">
            <pre><code>{`// Example Request
fetch('https://api.sams.agri/v1/recommendations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    location: { lat: 34.0522, lng: -118.2437 },
    soil_type: "loam",
    season: "spring"
  })
})
.then(response => response.json())
.then(data => console.log(data));`}</code></pre>
          </div>
        </div>
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Note on Authentication</h3>
          <p className="text-blue-600 dark:text-blue-400">API access is restricted to Enterprise and Professional tier accounts. Generate your API keys from the developer console in your dashboard.</p>
        </div>
      </div>
    </div>
  );
};
export default ApiDocs;
