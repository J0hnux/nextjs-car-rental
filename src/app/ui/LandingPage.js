"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  ChevronRight,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";
import { cars } from "../data/cars";
import { features } from "../data/cars";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fadeIn">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-display text-2xl font-bold text-slate-900">
                ELITE
              </span>
              <span className="text-xs tracking-widest text-slate-600 mt-1">
                RENTALS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#fleet"
                className="text-slate-700 hover:text-blue-900 transition font-medium"
              >
                Fleet
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-blue-900 transition font-medium"
              >
                Services
              </a>
              <a
                href="#locations"
                className="text-slate-700 hover:text-blue-900 transition font-medium"
              >
                Locations
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-blue-900 transition font-medium"
              >
                About
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-slate-700 hover:text-blue-900 transition flex items-center space-x-2">
                <User size={20} />
                <span>Sign In</span>
              </button>
              <button className="btn-primary bg-blue-900 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 font-medium">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
              <a
                href="#fleet"
                className="block text-slate-700 hover:text-blue-900 py-2"
              >
                Fleet
              </a>
              <a
                href="#services"
                className="block text-slate-700 hover:text-blue-900 py-2"
              >
                Services
              </a>
              <a
                href="#locations"
                className="block text-slate-700 hover:text-blue-900 py-2"
              >
                Locations
              </a>
              <a
                href="#about"
                className="block text-slate-700 hover:text-blue-900 py-2"
              >
                About
              </a>
              <button className="w-full bg-blue-900 text-white px-6 py-2.5 rounded-lg mt-4">
                Book Now
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
