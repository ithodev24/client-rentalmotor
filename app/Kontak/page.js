"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SosialMediaDropdown from "../components/SosialMediaDropdown";
import MapsKontak from "../components/MapsKontak";
import AnimatePage from "../components/AnimatePage";

const Kontak = () => {
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    email: "",
    pesan: "",
    source: "Website Sewa Motor",
  });

  const [errors, setErrors] = useState({});
  const [notif, setNotif] = useState({ message: "", type: "" });
  const [isSending, setIsSending] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      setErrors({});
      alert("Form berhasil dikirim!");
    }
  };

  return (
    <div className="bg-white">
      <Navbar />
      <AnimatePage>
        {/* Header Section */}
        <section className="px-6 md:px-20 pt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-6">
            <div>
              <p className="text-xl text-gray-800">
                Punya pertanyaan atau ingin melakukan pemesanan? Jangan ragu
                untuk menghubungi kami secara langsung. Dengan senang hati kami
                membantu segala kebutuhan Anda seputar penyewaan.
              </p>
            </div>
            {/* Judul Kontak */}
            <div className="text-center md:text-center hidden md:block">
              <h2 className="text-2xl font-bold text-black">Kontak Kami</h2>
            </div>
          </div>
        </section>

       {/* Form */}
<section className="bg-[#FFDD00] mt-12 px-6 md:px-20 py-14">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    <form onSubmit={handleSubmit} className="space-y-4 z-20">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          className="w-full md:w-1/2 p-3 rounded-full bg-white text-sm text-black outline-none"
        />
        <div className="w-full md:w-1/2">
          <input
            type="text"
            name="telepon"
            placeholder="No Telepon"
            value={form.telepon}
            onChange={handleChange}
            className="w-full p-3 rounded-full bg-white text-sm text-black outline-none"
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
          className="w-full p-3 rounded-full bg-white text-sm text-black outline-none"
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
        className="w-full p-3 rounded-xl bg-white text-sm text-black outline-none"
      />

      <button
        type="submit"
        disabled={isSending}
        className="bg-white hover:bg-red-800 text-black w-full py-2 px-6 rounded-b-full font-semibold"
      >
        {isSending ? "Mengirim..." : "Kirim Email"}
      </button>
    </form>

            {/* Ilustrasi */}
            <div className="flex justify-center items-end h-full md:h-[300px] mt-6 md:mt-0">
              <img
                src="/images/RD-kontakkami.png"
                alt="Ilustrasi Kontak"
                className="max-w-[220px] md:max-w-sm object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Sosial Media & Maps Section */}
        <section className="bg-[url('/images/RD-bg_kontakkami.png')] bg-cover bg-center py-16 px-6 text-white -mt-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Judul */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Mari Kunjungi Sosial <br />
                  Media Rentalday
                </h2>
              </div>

              {/* Dropdown Sosial Media */}
              <div className="flex flex-col gap-4 w-full max-w-sm mx-auto md:mx-0">
                <SosialMediaDropdown />
              </div>
            </div>

            {/* Maps Section */}
            <div className="mt-16">
              <MapsKontak />
            </div>
          </div>
        </section>

        <Footer />
      </AnimatePage>
    </div>
  );
};

export default Kontak;
