import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, Search, HelpCircle } from 'lucide-react';

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      <nav className="glass sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 border-b border-gray-200 dark:border-gray-800">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-agri-green to-emerald-500 p-2.5 rounded-xl shadow-lg"><Leaf className="text-white w-6 h-6" /></div>
          <h1 className="text-2xl font-display font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-agri-green-deep to-emerald-500">SAMS</h1>
        </Link>
        <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-agri-green font-medium transition-colors"><ChevronLeft className="w-5 h-5 mr-1" /> Back to Home</Link>
      </nav>
      <div className="bg-agri-green-deep text-white py-20 text-center">
        <h1 className="text-5xl font-display font-bold mb-8">How can we help?</h1>
        <div className="max-w-2xl mx-auto px-6 relative text-left">
          <input type="text" placeholder="Search for articles, guides, and FAQs..." className="w-full px-6 py-4 rounded-full bg-white text-gray-900 text-lg outline-none pr-14 shadow-2xl" />
          <Search className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How do I add my farm location?", a: "Go to your Dashboard, click on 'Farm Settings', and use the interactive map to drop a pin on your property's exact location." },
            { q: "How accurate is the AI recommendation?", a: "Our AI models are trained on millions of historical data points and maintain an 85-90% accuracy rate for yield predictions and crop viability." },
            { q: "Can I connect third-party IoT sensors?", a: "Yes, SAMS Professional and Enterprise plans support API integration for most major soil moisture and temperature sensors." },
            { q: "How do I upgrade my plan?", a: "Navigate to 'Billing' in your account settings. You can upgrade to Professional at any time, and the charges will be prorated." }
          ].map((faq, i) => (
            <div key={i} className="bg-white dark:bg-agri-bg-darkSurface p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex gap-3 items-start"><HelpCircle className="w-6 h-6 text-agri-green shrink-0 mt-0.5"/> {faq.q}</h4>
              <p className="text-gray-600 dark:text-gray-400 pl-9">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HelpCenter;
