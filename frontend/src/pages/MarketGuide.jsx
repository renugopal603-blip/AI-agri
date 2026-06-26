import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, TrendingUp } from 'lucide-react';

const MarketGuide = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-agri-green hover:text-agri-green-dark mb-8 transition-colors font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
        </Link>
        <div className="bg-white dark:bg-agri-bg-darkSurface rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
          <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Analyze Market Demand</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Farming is a business. A massive yield of perfectly healthy tomatoes means nothing if every other farmer in your district grew tomatoes and the local market price crashed.
          </p>

          <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Identify Local Buyers First</h3>
            <p>Before you put a single seed in the ground, figure out who is going to buy your harvest. Are you selling to a wholesale distributor, a local farmers market, directly to restaurants, or to a processing plant? Each buyer has different requirements for quality, quantity, and variety.</p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Understand Price Volatility</h3>
            <p>Crop prices fluctuate wildly based on supply and demand. If a crop was extremely profitable last year, many farmers will plant it this year, which often leads to oversupply and price crashes. Look for niche crops, high-value organics, or sign advance-purchase contracts to lock in your prices.</p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Value Addition</h3>
            <p>Sometimes the best way to secure demand is to process the crop yourself. Selling fresh strawberries might be highly competitive, but making artisanal strawberry jam or freezing them for smoothies opens up entirely new, more stable markets with higher profit margins.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketGuide;
