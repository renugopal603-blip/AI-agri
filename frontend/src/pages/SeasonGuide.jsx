import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, CloudSun } from 'lucide-react';

const SeasonGuide = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-agri-green hover:text-agri-green-dark mb-8 transition-colors font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
        </Link>
        <div className="bg-white dark:bg-agri-bg-darkSurface rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            <CloudSun className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Match the Season</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Planting at the wrong time of year is the number one reason crops fail. You must align your crop cycle with your region's natural weather patterns.
          </p>

          <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Know Your Frost Dates</h3>
            <p>If you live in a region that experiences winter frost, you absolutely must know your <strong>average last frost date</strong> in the spring and your <strong>average first frost date</strong> in the fall. These dates determine your "growing season window." Planting warm-season crops like tomatoes before the last frost will instantly kill them.</p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cool-Season vs Warm-Season Crops</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Cool-Season:</strong> Crops like broccoli, peas, lettuce, and carrots thrive in cooler temperatures. They can survive light frosts and are planted in early spring or late summer.</li>
              <li><strong>Warm-Season:</strong> Crops like corn, tomatoes, peppers, and melons require warm soil to germinate and hot days to fruit. They must be planted well after all danger of frost has passed.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Monsoon & Rainfall Planning</h3>
            <p>In tropical or subtropical regions, timing your planting around monsoon season is critical. Some crops require heavy water and should be planted right as the rains begin, while others will succumb to root rot if sitting in flooded fields.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonGuide;
