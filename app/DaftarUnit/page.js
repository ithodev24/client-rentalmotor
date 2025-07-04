"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardUnit from '../components/CardUnit/CardUnit';
import { units } from '../../data/units';

export default function DaftarUnit() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({ harga: '', daerah: '', kebutuhan: '', kapasitas: '', status: '' });

  const filteredUnits = units.filter((unit) => {
    const textMatch =
      unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchTerm.toLowerCase());

    const hargaMatch = !filters.harga || unit.harga === filters.harga;
    const daerahMatch = !filters.daerah || unit.daerah === filters.daerah;
    const kebutuhanMatch = !filters.kebutuhan || unit.kebutuhan === filters.kebutuhan;
    const kapasitasMatch = !filters.kapasitas || unit.kapasitas === filters.kapasitas;
    const statusMatch = !filters.status || unit.status === filters.status;

    return textMatch && hargaMatch && daerahMatch && kebutuhanMatch && kapasitasMatch && statusMatch;
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
 {/* Header & Search */}
      <div
        className="relative bg-cover bg-center h-48 sm:h-56 md:h-64 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/images/RD-bg_daftarunit.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl gap-2">
          {/* Search Input */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Cari Unit"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-4 pr-10 rounded-l-full rounded-r-none outline-none border border-white text-red-800 bg-white placeholder-yellow-600 focus:ring-2 focus:ring-white sm:text-sm md:text-base"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          {/* Filter Button */}
          <button
            className="bg-white text-red-700 px-3 py-2 sm:px-4 sm:py-2 border border-white rounded-full flex items-center justify-center"
            onClick={() => setShowFilter(!showFilter)}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M6 8h12M4 12h16M8 16h8M10 20h4" />
            </svg>
          </button>
        </div>

        {/* Filter Section as Overlay */}
        {showFilter && (
  <div className="relative z-20 mt-4 w-full max-w-6xl px-4">
    <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {['harga', 'daerah', 'kebutuhan', 'kapasitas', 'status'].map((label) => (
          <select
            key={label}
            className="bg-white text-red-700 px-4 py-2 rounded-full shadow focus:outline-none w-full"
            value={filters[label] || ''}
            onChange={(e) => setFilters({ ...filters, [label]: e.target.value })}
          >
            <option value="">{label.charAt(0).toUpperCase() + label.slice(1)}</option>
            {[...new Set(units.map((u) => u[label]))].map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ))}
      </div>
    </div>
  </div>
)}

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUnits.map((unit) => (
            <CardUnit
              key={unit.id}
              id={unit.id}
              name={unit.name}
              description={unit.description}
              image={unit.image}
              role={unit.role}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}