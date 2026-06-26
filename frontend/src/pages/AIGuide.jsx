import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Cpu, Database, BarChart } from 'lucide-react';

const AIGuide = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-agri-green hover:text-agri-green-dark mb-8 transition-colors font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
        </Link>
        <div className="bg-white dark:bg-agri-bg-darkSurface rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
            <Cpu className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">How Our AI Decides For You</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Take the guesswork out of farming. SAMS uses an advanced machine learning model to cross-reference thousands of data points instantly, giving you clear, actionable advice.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-400 shrink-0"><Database className="w-6 h-6" /></div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1. Local Data Extraction</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">When you enter your farm's location, the AI pulls historical soil health maps, terrain elevation, and 10-year weather patterns specific to your exact region.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl text-orange-600 dark:text-orange-400 shrink-0"><BarChart className="w-6 h-6" /></div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">2. Real-Time Market Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">The system scans local and national commodity markets to understand what crops are currently in high demand and projected to sell at premium prices by harvest time.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0"><Cpu className="w-6 h-6" /></div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3. The Final Recommendation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Within seconds, the AI outputs a ranked list of the top 3 crops most likely to succeed on your land, complete with expected yield percentages and step-by-step cultivation guides.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-100 dark:border-gray-800 text-center">
            <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ready to see your personalized recommendations?</h4>
            <Link to="/register" className="btn-primary inline-flex rounded-full px-10 py-4 text-lg font-bold shadow-lg hover:shadow-agri-green/40 hover:-translate-y-1 transition-all">
              Create Free Account & Run Analysis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGuide;
