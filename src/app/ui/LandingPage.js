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
      ></nav>
    </div>
  );
};

export default LandingPage;
