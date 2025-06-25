"use client";

import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Kontak = () => {
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    email: "",
    pesan: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};
    if (!/^\d+$/.test(form.telepon)) {
      err.telepon = "Nomor telepon hanya boleh angka";
    }
    if (!form.email.endsWith("@gmail.com")) {
      err.email = "Email harus menggunakan @gmail.com";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      setErrors({});
      alert("Form berhasil dikirim!");
      // Lakukan pengiriman data di sini
    }
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* Header & Form Section */}
      <section className="relative z-10">
        <div className="bg-white px-6 pt-12 md:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="mb-6">
              <p className="text-xl text-gray-800">
                Punya pertanyaan atau ingin melakukan pemesanan? Jangan ragu
                untuk menghubungi kami secara langsung. Dengan senang hati kami
                membantu segala kebutuhan Anda seputar penyewaan.
              </p>
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-2xl font-bold text-black">Kontak Kami</h2>
            </div>
          </div>
        </div>

        {/* Form Background */}
        <div className="bg-yellow-300 rounded-tl-[60px] pt-10 pb-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 z-20">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={form.nama}
                  onChange={handleChange}
                  className="w-full md:w-1/2 p-3 rounded-full bg-white text-sm outline-none"
                />
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="telepon"
                    placeholder="No Telepon"
                    value={form.telepon}
                    onChange={handleChange}
                    className="w-full p-3 rounded-full bg-white text-sm outline-none"
                  />
                  {errors.telepon && (
                    <p className="text-red-600 text-sm mt-1">{errors.telepon}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-full bg-white text-sm outline-none"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <textarea
                name="pesan"
                placeholder="Pesan"
                rows="5"
                value={form.pesan}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-800 text-white w-full py-2 px-6 rounded-b-full font-semibold"
              >
                Kirim Email
              </button>
            </form>

            {/* Gambar Ilustrasi */}
            <div className="flex justify-center items-start pt-6 md:pt-0">
              <img
                src="/images/RD-kontakkami.png"
                alt="Ilustrasi Kontak"
                className="max-w-[240px] md:max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    <section className="bg-[url('/images/RD-bg_kontakkami.png')] bg-cover bg-center py-12 px-4 text-white min-h-[400px] flex items-center justify-center">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Kiri: Judul */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
        Mari Kunjungi Sosial<br />Media Pixelnesia
      </h2>
    </div>

    {/* Kanan: Tombol Sosmed */}
    <div className="flex flex-col items-center md:items-start gap-4">
      <a
        href="https://wa.me/6285829764860"
        target="_blank"
        className="flex items-center justify-between gap-3 w-full max-w-xs p-3 bg-white rounded-xl text-green-700 font-semibold shadow hover:shadow-lg transition"
      >
        <div className="flex items-center gap-3">
          <img src="/images/logos_whatsapp-icon.png" className="h-5" />
          WhatsApp
        </div>
        <span className="text-green-700">&#9660;</span>
      </a>

      <a
        href="https://www.tiktok.com"
        target="_blank"
        className="flex items-center justify-between gap-3 w-full max-w-xs p-3 bg-white rounded-xl text-black font-semibold shadow hover:shadow-lg transition"
      >
        <div className="flex items-center gap-3">
          <img src="/images/logos_tiktok-icon.png" className="h-5" />
          TikTok
        </div>
        <span className="text-black">&#9660;</span>
      </a>

      <a
        href="https://www.instagram.com/dahliaquranissiva"
        target="_blank"
        className="flex items-center justify-between gap-3 w-full max-w-xs p-3 bg-white rounded-xl text-pink-500 font-semibold shadow hover:shadow-lg transition"
      >
        <div className="flex items-center gap-3">
          <img src="/images/logos_instagram-icon.png" className="h-5" />
          Instagram
        </div>
        <span className="text-pink-500">&#9660;</span>
      </a>
    </div>

  </div>
</section>

      <Footer />
    </div>
  );
};

export default Kontak;
