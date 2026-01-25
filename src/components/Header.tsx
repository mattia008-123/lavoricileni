"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-eco-green-600 text-white p-4 shadow-lg rounded-b-xl flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-3 p-2 rounded-full hover:bg-eco-green-700 transition-colors">
        <Home className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Eco-Sostenibile Projects</h1>
      </Link>
      {/* Qui potremmo aggiungere altri elementi di navigazione in futuro */}
    </header>
  );
};

export default Header;