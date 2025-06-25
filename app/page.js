import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-[600px] flex items-center px-4 md:px-10 py-10">
        <img
          src="/images/rentalmotor_bg.png"
          alt="Scooter Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src="/images/motor2+bayangan.png"
              alt="Motor dengan Bayangan"
              className="w-[200px] sm:w-[280px] md:w-[400px] lg:w-[500px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right md:pr-28">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic leading-tight">
              Rentalday
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed">
              Temukan layanan rental terbaik dengan harga <br />
              kompetitif dan proses cepat hanya pada <br />
              layanan kami.
            </p>
            <div className="mt-6 flex justify-center md:justify-end gap-4 flex-wrap">
              <a
                href="/unit"
                className="bg-white text-red-600 px-6 py-2 rounded-l-full shadow hover:bg-gray-100"
              >
                Lihat Daftar Motor
              </a>
              <a
                href="/kontak"
                className="bg-white text-red-600 px-6 py-2 rounded-r-full shadow hover:bg-gray-100"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white py-5 px-4 md:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              ['icon_pelayanan.png', 'Pelayanan Terbaik'],
              ['icon_keamanan.png', 'Keamanan Terjaga'],
              ['icon_perawatan.png', 'Perawatan Rutin'],
              ['icon_truk.png', 'Cash On Delivery']
            ].map(([icon, label], i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <img src={`/images/${icon}`} className="w-10 h-10" />
                <p className="text-sm md:text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Highlight */}
      <section className="bg-yellow-400 py-10 px-6 md:px-20 text-black">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Rentalday</h2>
            <h3 className="text-xl font-semibold mb-3">Rental Motor Indonesia</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Sebagai bagian dari ekosistem layanan PT Dahlia Global Indo, Rentalday hadir untuk
              menjawab kebutuhan mobilitas masyarakat urban yang dinamis dengan menyediakan layanan
              rental motor yang praktis, terjangkau, dan dapat diandalkan.
              <br /><br />
              Melalui Rentalday, pelanggan dapat menikmati kemudahan proses sewa motor, mulai dari
              pemesanan yang cepat, unit terawat, hingga layanan pelanggan yang responsif.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/images/image1+border.png"
              alt="Produk Motor"
              className="w-full max-w-sm mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Kenapa Harus Memilih */}
      <section className="bg-red-600 text-white px-6 py-12 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Kenapa Harus Memilih <br /> Rentalday?
            </h2>
            <div className="flex flex-col gap-4">
              {[
                ['icon-perawatan.png', 'Perawatan Motor Rutin Secara Berkala'],
                ['icon-motorbaru.png', 'Menyediakan Unit Motor Keluaran Terbaru'],
                ['icon-pembayaran.png', 'Metode Pembayaran Aman dan Profesional']
              ].map(([icon, text], i) => (
                <div key={i} className="bg-white text-black p-4 rounded shadow flex items-center gap-4 min-h-[80px] w-full">
                  <img src={`/images/${icon}`} className="w-10 h-10" />
                  <p className="font-semibold text-sm sm:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              ['icon-terpercaya.png', 'Terpercaya dan Sudah Berbadan Hukum'],
              ['icon-dokumen.png', 'Dokumen dan Legalitas Lengkap'],
              ['icon-layanan.png', 'Layanan Antar Jemput (COD) Fleksibel'],
              ['icon-data.png', 'Data Pribadi Pelanggan Terjamin Aman']
            ].map(([icon, text], i) => (
              <div key={i} className="bg-white text-black p-4 rounded shadow flex items-center gap-4 min-h-[80px] w-full">
                <img src={`/images/${icon}`} className="w-10 h-10" />
                <p className="font-semibold text-sm sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komitmen & Showcase Motor */}
      <section className="bg-gray-900 text-white text-center py-14 px-4 sm:px-6">
        {/* Animasi */}
        <style>{`
          @keyframes scroll-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <p className="text-xl sm:text-2xl mb-5">
          Kami berkomitmen memberikan unit terbaik kepada penyewa,<br />
          karena kepuasan dan keselamatan Anda adalah prioritas kami.
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          NIKMATI PERJALANANMU
        </h1>

        <div className="overflow-hidden w-full mb-8">
          <div
            className="flex gap-6 w-max"
            style={{ animation: 'scroll-loop 20s linear infinite' }}
          >
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, i) => (
              <img
                key={i}
                src={`/images/RD-motor${n}.png`}
                alt={`Motor ${n}`}
                className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto"
              />
            ))}
          </div>
        </div>

        <a
          href="/unit"
          className="bg-white text-red-600 px-6 py-3 rounded-full shadow hover:bg-gray-100 text-sm font-semibold"
        >
          Lihat Daftar Motor Rentalday
        </a>
      </section>

      <Footer />
    </div>
  );
}
