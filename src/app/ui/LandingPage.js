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
              <div className="w-10 h-10 bg-linear-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="">E</span>
              </div>
              <span className="">ELITE</span>
              <span className="">RENTALS</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#fleet" className="">
                Fleet
              </a>
              <a href="#services" className="">
                Services
              </a>
              <a href="#locations" className="">
                Locations
              </a>
              <a href="#about" className="">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
