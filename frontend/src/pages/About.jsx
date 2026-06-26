import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Leaf, Globe2, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-agri-bg-light dark:bg-agri-bg-dark text-gray-800 dark:text-gray-200">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-agri-green to-emerald-500 p-2.5 rounded-xl shadow-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-display font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-agri-green-deep to-emerald-500">SAMS</h1>
          </Link>
        </div>
        <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-agri-green font-medium transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-agri-green/10 rounded-full filter blur-[100px] -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">About SAMS</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            We are bridging the gap between traditional agriculture and cutting-edge artificial intelligence to empower farmers globally.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Agriculture is the backbone of human civilization, yet millions of farmers still rely on guesswork, outdated methods, and unpredictable weather patterns, leading to massive crop failures and financial ruin.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our mission at SAMS (Smart Agriculture Management System) is to democratize access to advanced agricultural data. We believe every farmer, regardless of farm size, deserves access to the same precision farming tools used by mega-corporations.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
              <img src="/images/farm_aerial.png" alt="Mission" className="relative rounded-[2rem] shadow-xl w-full object-cover aspect-square" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-agri-bg-darkSurface p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
              <Globe2 className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Reach</h3>
              <p className="text-gray-600 dark:text-gray-400">Our platform analyzes data from across the globe, providing localized insights no matter where your farm is located.</p>
            </div>
            <div className="bg-white dark:bg-agri-bg-darkSurface p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
              <ShieldCheck className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data Driven</h3>
              <p className="text-gray-600 dark:text-gray-400">Decisions backed by billions of data points, historical yields, and real-time market value.</p>
            </div>
            <div className="bg-white dark:bg-agri-bg-darkSurface p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
              <Users className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-400">Connecting farmers to a network of experts, buyers, and fellow agricultural innovators.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
