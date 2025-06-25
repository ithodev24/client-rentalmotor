"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardUnit from '../components/CardUnit/CardUnit';

export default function DaftarUnit() {
  const units = [
    {
      id: 1,
      name: "Yamaha Gear 125",
      description:
        "Dengan mesin 125cc yang responsif dan irit bahan bakar, Yamaha Gear 125 sangat cocok untuk mobilitas harian di perkotaan. Desainnya modern dan stylish, memberikan kenyamanan saat berkendara.",
      image: "/images/RD-yamahagear.png",
      role: "Mahasiswa",
    },
    {
      id: 2,
      name: "Vespa LX 125",
      description:
        "Dengan mesin 125cc yang responsif dan irit bahan bakar, Vespa LX 125 hadir dengan desain klasik yang elegan, memberikan kenyamanan saat berkendara di perkotaan.",
      image: "/images/RD-vespalx.png",
      role: "Mahasiswa",
    },
    {
      id: 3,
      name: "Vespa LX 125",
      description:
        "Skuter ikonik yang memberikan kenyamanan dengan desain modern yang stylish, cocok untuk berbagai kebutuhan sehari-hari.",
      image: "/images/RD-vespalx2.png",
      role: "Mahasiswa",
    },
    {
      id: 4,
      name: "Polytron Fox S",
      description:
        "Motor elektrik stylish dari brand lokal Polytron, dengan desain modern yang mendukung lingkungan, tenaga, dan ramah lingkungan.",
      image: "/images/RD-polytronpox.png",
      role: "Karyawan",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header + Search */}
      <div
        className="relative bg-cover bg-center h-48 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/RD-bg_daftarunit.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex">
          <input
            type="text"
            placeholder="Cari Motor"
            className="p-2 w-64 rounded-l-full outline-none border border-white text-white bg-transparent placeholder-white focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-red-600 p-2 rounded-r-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* List Unit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.map((unit) => (
            <CardUnit
              key={unit.id}
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
