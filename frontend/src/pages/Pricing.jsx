import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      <nav className="glass sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 border-b border-gray-200 dark:border-gray-800">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-agri-green to-emerald-500 p-2.5 rounded-xl shadow-lg"><Leaf className="text-white w-6 h-6" /></div>
          <h1 className="text-2xl font-display font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-agri-green-deep to-emerald-500">SAMS</h1>
        </Link>
        <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-agri-green font-medium transition-colors"><ChevronLeft className="w-5 h-5 mr-1" /> Back to Home</Link>
      </nav>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Choose the plan that best fits your farm's size and needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-agri-bg-darkSurface p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-extrabold mb-6">$0<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Perfect for small hobby farms.</p>
            <ul className="space-y-4 mb-8">
              {['Basic AI Recommendations', 'Local Weather Alerts', 'Up to 5 Acres', 'Community Forum Access'].map((f, i) => <li key={i} className="flex gap-2 items-center"><Check className="text-agri-green w-5 h-5"/> {f}</li>)}
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-agri-green text-agri-green font-bold hover:bg-agri-green hover:text-white transition-colors">Current Plan</button>
          </div>
          <div className="bg-agri-green-deep text-white p-10 rounded-3xl shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-3xl text-sm font-bold">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <div className="text-4xl font-extrabold mb-6">$49<span className="text-lg font-normal text-agri-green-light">/mo</span></div>
            <p className="text-agri-green-light mb-8">For commercial farmers scaling up.</p>
            <ul className="space-y-4 mb-8">
              {['Advanced AI Crop Scanning', 'Real-time Market Prices', 'Up to 500 Acres', 'Priority Support', 'IoT Sensor Integration'].map((f, i) => <li key={i} className="flex gap-2 items-center"><Check className="text-emerald-400 w-5 h-5"/> {f}</li>)}
            </ul>
            <button className="w-full py-3 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors">Upgrade to Pro</button>
          </div>
          <div className="bg-white dark:bg-agri-bg-darkSurface p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-extrabold mb-6">Custom</div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">For large-scale agricultural operations.</p>
            <ul className="space-y-4 mb-8">
              {['Unlimited Acreage', 'Dedicated Account Manager', 'Custom API Access', 'Drone Mapping Integration', 'White-label Reports'].map((f, i) => <li key={i} className="flex gap-2 items-center"><Check className="text-agri-green w-5 h-5"/> {f}</li>)}
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
