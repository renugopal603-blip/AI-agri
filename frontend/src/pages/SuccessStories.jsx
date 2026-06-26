import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, Quote } from 'lucide-react';

const SuccessStories = () => {
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
        <h1 className="text-5xl font-display font-bold text-center text-gray-900 dark:text-white mb-16">Farmer Success Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { name: "John Davis", farm: "Davis Family Farms", text: "SAMS literally saved our harvest last year. The AI alerted us to a highly localized frost warning three days in advance. We managed to cover our tender crops, saving $40,000 in potential losses." },
            { name: "Maria Gonzalez", farm: "Green Acres Organic", text: "Before SAMS, we grew what we've always grown. The AI recommended switching 20% of our land to a niche pepper variety. Our profit margins on that 20% exceeded the rest of the farm combined." },
            { name: "Robert Chen", farm: "Valley Produce", text: "The soil health tracking is incredible. We realized we were over-fertilizing with nitrogen. Cutting back not only saved us money but actually improved our yield by 15%." },
            { name: "Sarah Williams", farm: "Williams Estate", text: "The real-time market data is a game changer. We now know exactly when to sell to local distributors to get the absolute highest price for our corn." }
          ].map((story, i) => (
            <div key={i} className="bg-white dark:bg-agri-bg-darkSurface p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-agri-green/10" />
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic relative z-10">"{story.text}"</p>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{story.name}</h4>
                <p className="text-agri-green">{story.farm}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SuccessStories;
