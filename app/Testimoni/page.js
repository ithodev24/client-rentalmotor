"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatePage from "../components/AnimatePage";

const testimonials = [
  {
    name: "Riyadatunnisa",
    role: "Mahasiswi",
    video: "/videos/Trevo - Aplikasi Rental Mobil.mp4",
    text: "Motornya nyaman banget, dapet fasilitas keamanan juga. Untuk pengambilan motor bisa diantar sesuai dengan alamat persetujuan, mantap.",
  },
  {
    name: "Ayu Nadya",
    role: "Wisatawan",
    video: "/videos/Trevo - Aplikasi Rental Mobil.mp4",
    text: "Pelayanan sangat memuaskan, motor dalam kondisi prima dan proses sewa mudah sekali. Akan sewa lagi next time!",
  },
  {
    name: "Cahaya Insani",
    role: "Mahasiswi",
    video: "/videos/Trevo - Aplikasi Rental Mobil.mp4",
    text: "Harga terjangkau untuk kualitas motor yang diberikan. Proses pengantaran cepat dan petugasnya ramah.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('/images/testimonial.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <AnimatePage>
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Judul HP */}
          <h2 className="text-2xl md:hidden font-bold text-center mb-6">
            Kata Mereka Tentang Rentalday
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
            {/* Box Besar */}
            <div className="relative w-[90%] max-w-sm md:w-full md:max-w-md">
              <div className="bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col h-[400px]">
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <video
                    src={testimonials[currentIndex].video}
                    controls
                    className="w-full h-full object-cover"
                  ></video>
                </div>
                <div className="flex items-center mt-3 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-md font-semibold">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between mt-2 gap-4">
                  <p className="text-sm text-gray-700 flex-1">
                    {testimonials[currentIndex].text}
                  </p>
                  <img
                    src="/images/logo_rentalday.png"
                    alt="Logo"
                    className="h-14 object-contain"
                  />
                </div>
              </div>

              {/* Tombol Navigasi Desktop */}
              <button
                onClick={handlePrev}
                className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Judul & Box Kecil */}
            <div className="flex flex-col items-start w-full md:w-auto">
              {/* Judul Desktop */}
              <h2 className="hidden md:block text-4xl font-bold text-white ml-2 md:ml-8 mb-4">
                Kata Mereka Tentang Rentalday
              </h2>

              <div className="hidden md:flex mt-2 flex-col md:flex-row gap-8 md:ml-8">
                {[
                  testimonials[
                    (currentIndex - 1 + testimonials.length) %
                      testimonials.length
                  ],
                  testimonials[(currentIndex + 1) % testimonials.length],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-[90%] max-w-sm md:w-80 bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col"
                  >
                    <div className="relative rounded-xl overflow-hidden aspect-video">
                      <video
                        src={item.video}
                        controls
                        className="w-full h-full object-cover"
                      ></video>
                    </div>
                    <div className="flex items-center mt-3 justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-md font-semibold">{item.name}</div>
                        <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between mt-2 gap-4">
                      <p className="text-sm text-gray-700 flex-1">
                        {item.text}
                      </p>
                      <img
                        src="/images/logo_rentalday.png"
                        alt="Logo"
                        className="h-14 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tombol Navigasi HP */}
              <div className="flex justify-center gap-4 mt-6 md:hidden w-full">
                <button
                  onClick={handlePrev}
                  className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </AnimatePage>
    </div>
  );
}
