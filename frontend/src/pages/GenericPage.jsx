import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Construction } from 'lucide-react';

const GenericPage = ({ title }) => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white dark:bg-agri-bg-darkSurface p-12 rounded-[2rem] shadow-xl text-center max-w-lg w-full border border-gray-100 dark:border-gray-800">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6">
          <Construction className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          This page is currently under construction. Our team is working hard to bring you this content soon!
        </p>
        <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
          <ChevronLeft className="w-5 h-5" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default GenericPage;
