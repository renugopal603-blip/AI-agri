import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, Droplets, CloudSun, BarChart3, Scan, Shield } from 'lucide-react';

const Features = () => {
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
          <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Powerful Features</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to modernize your farm and increase your yields.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Scan className="w-8 h-8 text-emerald-500" />, title: 'AI Crop Scanning', desc: 'Instantly identify diseases and pests by uploading a photo of your crops.' },
            { icon: <CloudSun className="w-8 h-8 text-blue-500" />, title: 'Micro-Climate Weather', desc: 'Get hyper-local weather forecasts tailored exactly to your farm\'s GPS coordinates.' },
            { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, title: 'Yield Prediction', desc: 'Accurately forecast your harvest volume weeks in advance using historical data.' },
            { icon: <Droplets className="w-8 h-8 text-cyan-500" />, title: 'Smart Irrigation', desc: 'Optimize water usage with soil moisture sensors and automated watering schedules.' },
            { icon: <Leaf className="w-8 h-8 text-green-500" />, title: 'Soil Health Tracking', desc: 'Monitor NPK and pH levels over time to ensure perfect growing conditions.' },
            { icon: <Shield className="w-8 h-8 text-purple-500" />, title: 'Risk Mitigation', desc: 'Receive automated alerts about sudden market crashes or incoming severe weather.' }
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-agri-bg-darkSurface p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform">
              <div className="bg-gray-50 dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features;
