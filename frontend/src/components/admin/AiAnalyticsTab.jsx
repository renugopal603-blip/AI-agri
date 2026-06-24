import React from 'react';
import AdvancedAiSuggestions from '../modules/AiSuggestionsTab';

const AiAnalyticsTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">AI Analytics Center</h2>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900/50 p-2 sm:p-6">
        <AdvancedAiSuggestions activeFarm={{ name: 'Admin Demo Farm', location: 'Coimbatore, Tamil Nadu', soil: 'Black Soil', area: '15' }} />
      </div>
    </div>
  );
};

export default AiAnalyticsTab;
