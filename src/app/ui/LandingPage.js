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
import { features } from "../data/features";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .gradient-text {
          background: linear-gradient(135deg, #1e3a8a 0%, #c49b63 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .car-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .car-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .car-card img {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .car-card:hover img {
          transform: scale(1.08);
        }

        .btn-primary {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .hero-overlay {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.85) 100%);
        }

        .feature-icon {
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.15) rotate(5deg);
        }

        .accent-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #c49b63 0%, transparent 100%);
        }
      `}</style>

      {/* Navigation */}
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
              <span
                className={`font-display text-2xl font-bold text-slate-900 ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="opacity-0 animate-fadeInUp delay-200">
            <p className="text-amber-400 tracking-widest text-sm font-medium mb-4">
              PREMIUM CAR RENTAL EXPERIENCE
            </p>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 opacity-0 animate-fadeInUp delay-300">
            Drive Your
            <br />
            <span className="italic">Dreams</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto opacity-0 animate-fadeInUp delay-400 font-light">
            Experience the world's finest vehicles with unparalleled service and
            flexibility
          </p>

          {/* Search Box */}
          <div className="glass-effect rounded-2xl p-6 md:p-8 max-w-4xl mx-auto opacity-0 animate-scaleIn delay-500">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2 text-left">
                  Location
                </label>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm">
                  <MapPin size={20} className="text-slate-400" />
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="w-full outline-none text-slate-900"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2 text-left">
                  Pick-up Date
                </label>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm">
                  <Calendar size={20} className="text-slate-400" />
                  <input
                    type="date"
                    className="w-full outline-none text-slate-900"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2 text-left">
                  Return Date
                </label>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm">
                  <Calendar size={20} className="text-slate-400" />
                  <input
                    type="date"
                    className="w-full outline-none text-slate-900"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button className="btn-primary w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-semibold flex items-center justify-center space-x-2">
                  <Search size={20} />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeIn delay-600">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="accent-line mb-4"></div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                Featured <span className="italic">Collection</span>
              </h2>
              <p className="text-slate-600 text-lg">
                Curated selection of our premium vehicles
              </p>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-blue-900 font-semibold hover:space-x-3 transition-all">
              <span>View All</span>
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {cars.map((car, index) => (
              <div
                key={car.id}
                className={`car-card bg-slate-50 rounded-2xl overflow-hidden shadow-sm opacity-0 animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-slate-900">
                      ${car.price}
                      <span className="text-slate-600 text-xs">/day</span>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-amber-600 font-semibold mb-2">
                    {car.category}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                    {car.name}
                  </h3>
                  <div className="flex items-center space-x-6 text-sm text-slate-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{car.specs.seats} seats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>•</span>
                      <span>{car.specs.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>•</span>
                      <span>{car.specs.fuel}</span>
                    </div>
                  </div>
                  <button className="btn-primary w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-semibold transition">
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-4"></div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Why Choose <span className="italic text-amber-400">Elite</span>
            </h2>
            <p className="text-slate-300 text-lg">
              Premium service, exceptional experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`feature-card text-center p-8 opacity-0 animate-fadeInUp delay-${(index + 2) * 100}`}
                >
                  <div className="feature-icon inline-flex items-center justify-center w-16 h-16 bg-amber-400 rounded-2xl mb-6">
                    <Icon size={32} className="text-slate-900" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-4"></div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Simple <span className="italic">Process</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Three easy steps to your dream ride
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Choose Your Vehicle",
                desc: "Browse our premium fleet and select your perfect match",
              },
              {
                step: "02",
                title: "Book & Confirm",
                desc: "Secure your reservation with flexible payment options",
              },
              {
                step: "03",
                title: "Drive Away",
                desc: "Pick up your vehicle and enjoy the journey",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center opacity-0 animate-fadeInUp delay-${(index + 2) * 100}`}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-32 h-0.5 bg-gradient-to-r from-blue-900 to-transparent"></div>
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Ready to <span className="italic text-amber-400">Experience</span>{" "}
            Luxury?
          </h2>
          <p className="text-xl text-slate-200 mb-12 font-light">
            Join thousands of satisfied customers who trust Elite Rentals for
            their journeys
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary bg-amber-400 text-slate-900 px-10 py-4 rounded-lg hover:bg-amber-300 font-bold text-lg">
              Start Your Journey
            </button>
            <button className="btn-primary border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-slate-900 font-bold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-xl">E</span>
                </div>
                <span className="font-display text-2xl font-bold">ELITE</span>
              </div>
              <p className="text-slate-400 mb-4">
                Premium car rental experience for discerning travelers
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-400 transition"
                    >
                      <span className="sr-only">{social}</span>
                    </a>
                  ),
                )}
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Luxury Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Chauffeur Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Corporate Rentals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Airport Transfer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2026 Elite Rentals. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-amber-400 transition">
                Terms
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
