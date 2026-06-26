import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, FlaskConical } from 'lucide-react';

const SoilTestingGuide = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-agri-green hover:text-agri-green-dark mb-8 transition-colors font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
        </Link>
        <div className="bg-white dark:bg-agri-bg-darkSurface rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
            <FlaskConical className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Test Your Soil First</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Understanding your soil is the absolute most important step before purchasing seeds. A crop that thrives in acidic soil will quickly die in alkaline soil.
          </p>

          <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why Soil pH Matters</h3>
            <p>Soil pH measures how acidic or alkaline your soil is on a scale from 0 to 14. Most plants prefer a slightly acidic pH between 6.0 and 7.0. If the pH is too high or too low, the plant roots literally cannot absorb nutrients from the soil, no matter how much fertilizer you apply.</p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">The Big Three: N-P-K</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Nitrogen (N):</strong> Crucial for leaf growth and green color. Leafy greens like spinach need lots of nitrogen.</li>
              <li><strong>Phosphorus (P):</strong> Helps with root growth, flowers, and fruit development. Root crops like carrots need good phosphorus.</li>
              <li><strong>Potassium (K):</strong> Promotes overall plant health, disease resistance, and cold hardiness.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How to Test</h3>
            <p>You can purchase a DIY soil test kit from a local nursery, or for the best results, send a soil sample to your local agricultural university or extension office. They will provide a detailed breakdown of your soil's composition and exactly what amendments you need to add.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilTestingGuide;
