import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'cars':
        return <CarList />;
      case 'contact':
        return <ContactUs />;
      case 'about':
        return <About />;
      default:
        return <CarList />;
    }
  };

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="content">
        {renderPage()}
      </div>
      <Footer setCurrentPage={setCurrentPage} />
      <PopupWhatsApp /> {/* Tambahkan pop-up di sini */}
    </div>
  );
};

const Navbar = ({ setCurrentPage }) => (
  <nav className="navbar" style={{
    backgroundImage: 'url(./src/assets/mobil4.webp)', // Ganti dengan path gambar Anda
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', // Ukuran navbar diperbesar
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Text tetap di atas
    color: 'white',
    padding: '20px 40px', // Menambahkan padding agar ada ruang ekstra
  }}>
    <div className="navbar-left">
      <h1 style={{ margin: 0 }}>ARENT Lux</h1>
    </div>
    <div className="navbar-center">
      <ul className="navbar-menu">
        <li onClick={() => setCurrentPage('cars')}>Sewa Mobil</li>
        <li onClick={() => setCurrentPage('about')}>Tentang ARENT Lux</li>
        <li onClick={() => setCurrentPage('contact')}>Contact Us</li>
      </ul>
    </div>
  </nav>
);

// Menggunakan Intersection Observer API
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.querySelector('.ripple');

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  });
});

const CarList = () => {
  const cars = [
    { id: 1, name: 'All New Avanza', price: 'Rp 450.000', img: './src/assets/avansa.jpg' },
    { id: 2, name: 'Honda CR-V', price: 'Rp 350.000', img: './src/assets/crv.jpg' },
    { id: 3, name: 'Toyota Zenix Hybrid', price: 'Rp 750.000', img: './src/assets/zenix.png' }, // Pindah ke sini
    { id: 4, name: 'Fortuner 2.8', price: 'Rp 1.200.000', img: './src/assets/fortuner.webp' },
    { id: 5, name: 'Toyota Alphard Facelift', price: 'Rp 3.000.000', img: './src/assets/alphard.png' },
    { id: 6, name: 'Innova Reborn Facelift', price: 'Rp 650.000', img: './src/assets/innova.webp' },
    { id: 7, name: 'Xenia', price: 'Rp 400.000', img: './src/assets/xenia.jpg' },
    { id: 8, name: 'Elf Giga', price: 'Rp 950.000', img: './src/assets/giga.webp' },
    { id: 9, name: 'Toyota Hiace Premio', price: 'Rp 1.000.000', img: './src/assets/prem.webp' },
    { id: 10, name: 'Toyota Agya', price: 'Rp 300.000', img: './src/assets/agya.jpg' },
    { id: 11, name: 'Pajero Dakar', price: 'Rp 1.750.000', img: './src/assets/pajero.jpg' },
    { id: 12, name: 'Honda Brio', price: 'Rp 325.000', img: './src/assets/brio.jpg' },
    { id: 13, name: 'Honda Jazz', price: 'Rp 350.000', img: './src/assets/jaz.jpg' },
    { id: 14, name: 'Suzuki Ertiga ', price: 'Rp 450.000', img: './src/assets/tiga.jpg' },
    { id: 15, name: 'Toyota Hiace', price: 'Rp 900.000', img: './src/assets/hia.webp' },
  ];  

  return (
    <div className="car-list">
      <h2 style={{ color: '#000000' }}>Daftar Harga Sewa Mobil</h2> {/* Ganti warna sesuai keinginan */}
      <ul>
        {cars.map(car => (
          <li key={car.id} className="car-item">
            <div className="car-image-container">
              <img src={car.img} alt={car.name} className="car-image" />
            </div>
            <div className="car-info">
  <h3>{car.name}</h3>
  <p className="car-price"><strong>{car.price}</strong></p>
  <div className="car-info-list">
    <li>Harga sudah termasuk driver</li>
    <li>Tidak termasuk BBM, tol, parkir, makan drivery</li>
    <li>Batas pelayanan pukul 22.00</li>
    <li>Overtime dikenakan biaya Rp 30.000/jam</li>
    <li>Harga di atas hanya berlaku di area Kota Malang dan batu</li>
    <li>Untuk luar kota ada biaya tambahan (over area)</li>
    <li>Harga tidak berlaku di high season</li>
  </div>
  
  <p className="note-text">
    <span className="highlight red-text">*Harga khusus untuk wilayah Malang</span><br />
    <span className="highlight red-text">*Tidak menerima Lepas Kunci</span>
  </p>
  <button
  className="order-button"
  onClick={() => {
    window.location.href = 'https://api.whatsapp.com/send?phone=6282131554720&text=Saya%20berminat%20sewa%20*Innova%20Reborn%20Facelift*%20Atas%20nama%3A%20Tanggal%20pemakaian%3A%20Bulan%3A%20Durasi%20Sewa%3A';
  }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="whatsapp-logo"
  />
  Pesan Sekarang
</button>
</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactUs = () => (
  <div className="contact-us">
    <h2>Kontak Kami</h2>
    <div className="map-container">
      <iframe
        title="Peta Indonesia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126856.9536338706!2d112.63091313058684!3d-7.979724346130353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79e4c74f7e0017%3A0xa440f1f7a4f8dfc8!2sMalang%2C%20Jawa%20Timur%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1694976395403!5m2!1sen!2sid"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div className="contact-info">
    <h2>Info Kontak Kami</h2>
      <p>
        <i className="fas fa-home"></i> Alamat: Kec.Sukun Kel.Bandungrejosari Jl. Simpang Kepuh RW10 RT03 No. 30, Malang, Jawa Timur, Indonesia
      </p>
      <p>
        <i className="fas fa-phone"></i> Telepon: 089513786006
      </p>
      <p>
        <i className="fas fa-envelope"></i> Email: rental@gmail.com
      </p>
    </div>
  </div>
);

const About = () => (
  <div className="about">
    <h2>Tentang ARENT Lux</h2>

    {/* Section pertama: Teks di kiri, gambar di kanan */}
    <div className="about-section">
      <div className="about-text">
        <p>
          ARENT Lux adalah pilihan terbaik bagi Anda yang mencari kenyamanan, kemewahan, dan kemudahan dalam layanan sewa mobil premium.

          Kami menyediakan berbagai jenis mobil yang sesuai untuk segala kebutuhan, mulai dari mobil keluarga hingga kendaraan mewah seperti Toyota Alphard dan Toyota HiAce Premio yang siap memberikan kenyamanan maksimal dalam setiap perjalanan Anda.

          Selain layanan sewa mobil, ARENT Lux juga menawarkan berbagai paket wisata menarik, mulai dari wisata satu hari hingga paket perjalanan yang lebih panjang. Dengan destinasi yang beragam seperti Malang, Batu, Bromo, hingga Kawah Ijen, kami siap membantu merencanakan perjalanan impian Anda.

          Kami memastikan bahwa setiap langkah dari pemesanan hingga perjalanan bersama ARENT Lux berjalan lancar dan memuaskan, sehingga Anda dapat menikmati pengalaman berkendara yang luar biasa tanpa kerepotan.
        </p>
      </div>
      <div className="about-image-container">
        <img src="./src/assets/mobil3.jpg" alt="Mobil Terbaru" className="about-image" />
      </div>
    </div>

    <div className="rental-mobil">
      <h3>ARENT Lux</h3>
    </div>

    {/* Section kedua: Gambar di kiri, teks di kanan */}
    <div className="about-section">
      <div className="about-image-container">
        <img src="./src/assets/mobil2.jpg" alt="Layanan Pelanggan" className="about-image" />
      </div>
      <div className="about-text">
        <p>
          Kami di ARENT Lux berkomitmen untuk selalu memberikan pengalaman terbaik bagi setiap pelanggan kami.

          Armada mobil kami terawat dengan baik dan selalu dalam kondisi prima untuk memastikan keamanan dan kenyamanan Anda. Didukung oleh pengemudi profesional dan berpengalaman, kami siap membantu Anda dalam setiap perjalanan, baik untuk keperluan wisata, bisnis, maupun acara pribadi.

          Layanan rental kami mencakup segala kebutuhan dengan harga kompetitif, memberikan Anda kenyamanan maksimal yang sebanding dengan kualitas layanan yang kami tawarkan.
        </p>
      </div>
    </div>

    <div className="rental-mobil">
      <h3>ARENT Lux</h3>
    </div>

    {/* Section ketiga: Teks di kiri, gambar di kanan */}
    <div className="about-section">
      <div className="about-text">
        <p>
          Kepuasan pelanggan adalah prioritas utama kami di ARENT Lux. 

          Kami menawarkan berbagai pilihan mobil serta paket sewa yang fleksibel dan dapat disesuaikan dengan kebutuhan Anda. Dengan tim yang selalu siap memberikan pelayanan ramah dan responsif, kami memastikan setiap aspek perjalanan Anda berjalan lancar.

          Setiap perjalanan bersama ARENT Lux bukan hanya tentang mencapai tujuan, tetapi juga tentang menciptakan pengalaman berkesan yang bebas dari kekhawatiran.
        </p>
      </div>
      <div className="about-image-container">
        <img src="./src/assets/mobil.jpg" alt="Pengemudi Profesional" className="about-image" />
      </div>
    </div>
  </div>
);

const PopupWhatsApp = () => {
  const handleClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=6282131554720&text=Halo,%20saya%20berminat%20menyewa%20mobil.';
  };

  return (
    <div className="popup-whatsapp" onClick={handleClick}>
      <p>Mau sewa mobil? <br/> Hubungi kami!</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-logo-popup"
      />
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-info">
      <h3>Info</h3>
      <p><i className="fas fa-home"></i> Alamat: Kec.Sukun Kel.Bandungrejosari Jl. Simpang Kepuh RW10 RT03 No. 30, Malang, Jawa Timur, Indonesia</p>
      <p><i className="fas fa-phone"></i> Telp: 089513786006</p>
      <p><i className="fas fa-envelope"></i> rental@gmail.com</p>
    </div>

    <div className="footer-nav">
      <h3>Navigasi Link</h3>
      <ul>
        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Sewa Mobil</li>
        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Tentang ARENT Lux</li>
        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</li>
      </ul>
    </div>

    <div className="map-container">
      <iframe
        title="Peta Lokasi"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126856.9536338706!2d112.63091313058684!3d-7.979724346130353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79e4c74f7e0017%3A0xa440f1f7a4f8dfc8!2sMalang%2C%20Jawa%20Timur%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1694976395403!5m2!1sen!2sid"
        width="250" // Sesuaikan lebar peta
        height="100%" // Penuhi tinggi footer
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    </head>
  </footer>
);

export default App;
