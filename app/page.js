'use client'
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, Users, BookOpen, Award, ChevronRight, Play, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Navbarhomepage from '@/components/Navbarhomepage';

const SchoolFinderLanding = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Search, title: "Smart Search", description: "AI-powered search to find the perfect school match" },
    { icon: MapPin, title: "Location-Based", description: "Find schools in your neighborhood or preferred area" },
    { icon: Star, title: "Reviews & Ratings", description: "Real parent and student reviews to guide your choice" },
    { icon: Users, title: "Community Insights", description: "Connect with other parents and school communities" }
  ];

  const stats = [
    { number: "10K+", label: "Schools Listed" },
    { number: "50K+", label: "Happy Families" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  const schools = [
    { name: "Greenwood Elementary", rating: 4.8, students: 450, type: "Public", image: '/school.jpeg' },
    { name: "St. Mary's Academy", rating: 4.9, students: 320, type: "Private", image: '/school1.webp' },
    { name: "Riverside High School", rating: 4.7, students: 1200, type: "Public", image: '/school2.webp' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation */}
      <Navbarhomepage />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Find the Perfect
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block">
                School
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover, compare, and connect with the best schools in your area. 
              Make informed decisions for your child's educational journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center p-4">
                    <Search className="w-6 h-6 text-gray-400 mr-4" />
                    <input
                      type="text"
                      placeholder="Search schools by name, location, or type..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 text-lg outline-none text-gray-700 placeholder-gray-400"
                    />
                    <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Schools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Schools</h2>
            <p className="text-xl text-gray-600">Top-rated schools in your area</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {schools.map((school, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                  <div className=" object-cover w-full h-48 w-">
                    <Image src={school.image} alt={school.name}  className="object-cover w-full h-full" width={100} height={100} />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                      {school.type}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{school.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-4">{school.students} students</p>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform group-hover:scale-105 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SchoolFinder?</h2>
            <p className="text-xl text-gray-600">Everything you need to make the right choice</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-8 rounded-3xl hover:bg-white/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect School?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Join thousands of parents who have found their ideal school match with SchoolFinder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Your Search
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              SchoolFinder
            </span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 SchoolFinder. All rights reserved.</p>
            <p className="mt-2">Helping families find the perfect educational fit.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SchoolFinderLanding;