export default function Footer() {
  return (
    <footer className="relative bg-white text-black">
      {/* Ornamen bunga kiri atas */}
      <img
        src="/images/logo_footer_kiri.png"
        alt="Flower Top Left"
        className="absolute top-0 left-0 w-130"
      />

      {/* Ornamen bunga kanan bawah */}
      <img
        src="/images/logo_footer_kanan.png"
        alt="Flower Bottom Right"
        className="absolute bottom-0 right-0 mb-10 w-100"
      />

      {/* Konten utama */}
      <div className="relative max-w-full mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Kolom 1: Media Sosial & Bank */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        {/* Ikon Media Sosial */}
        <div className="flex space-x-4 mt-14">
          {/* <a href="#"><img src="/images/icon_fb.png" alt="Facebook" className="w-7 h-7" /></a> */}
          <a href="#"><img src="/images/icon_ig.png" alt="TikTok" className="w-7 h-7" /></a>
          <a href="#"><img src="/images/icon_wa.png" alt="WhatsApp" className="w-7 h-7" /></a>
        </div>

        {/* Logo Bank Gabungan */}
        <div className="flex justify-start">
          <img
            src="/images/pm_all.png"
            alt="Logo Bank"
            className="h-16 w-auto ml-[-16px] object-contain"
          />
        </div>

          {/* Logo Bank with specific logos
          <div className="flex justify-end">
          <div className="mt-6 flex items-center space-x-6 bg-yellow-300 rounded-r-full px-6 py-2 shadow-md ml-auto">
          <img src="/images/pm_bni.png" alt="BNI" className="h-8" />
          <img src="/images/pm_bca.png" alt="BCA" className="h-8" />
          <img src="/images/pm_mandiri.png" alt="Mandiri" className="h-8" />
          <img src="/images/pm_qris.png" alt="QRIS" className="h-8" />
        </div>
        </div> */}
        </div>

        {/* Kolom 2: Navigasi */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-yellow-500">Beranda</a></li>
              <li><a href="#" className="hover:text-yellow-500">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-yellow-500">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Isi Pendukung</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-yellow-500">Layanan Kami</a></li>
              <li><a href="#" className="hover:text-yellow-500">Artikel</a></li>
              <li><a href="#" className="hover:text-yellow-500">Keunggulan</a></li>
              <li><a href="#" className="hover:text-yellow-500">Dokumen</a></li>
              <li><a href="#" className="hover:text-yellow-500">Sejarah Perusahaan</a></li>
              <li><a href="#" className="hover:text-yellow-500">Visi & Misi</a></li>
            </ul>
          </div>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="text-sm">
          <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
          <p>Jl. Kebon Kawung No.49, Pasir Kaliki,</p>
          <p>Kec. Cicendo, Kota Bandung, Jawa Barat 40171, Indonesia</p>
          <p className="mt-2">ptdahliglobalindo@gmail.com</p>
          <p>(+62) 858-2976-4860</p>
        </div>
      </div>

      {/* Garis kuning dan Hak Cipta */}
      <div className="bg-yellow-400 py-2 text-center text-xs text-black">
        ©Riyadatunnisa. Hak Cipta Dilindungi oleh undang-undang. | <a href="#" className="underline">Powered by GoEnt</a>
      </div>
    </footer>
  );
}