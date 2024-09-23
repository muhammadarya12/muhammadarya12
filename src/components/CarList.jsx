import React from 'react';

const CarList = () => {
  const cars = [
    { id: 1, name: 'Inova', price: '50€/day', image: ' ./src/assets/agya.jpg.' }, // Ganti path di sini
    { id: 2, name: 'Toyota Agya', price: '70€/day', image: 'https://example.com/car2.jpg' },
    { id: 3, name: 'Alpard', price: '90€/day', image: 'https://example.com/car3.jpg' },
  ];

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>{car.price}</p>
          <button className="rent-button">Sewa Sekarang</button>
        </div>
      ))}
    </div>
  );
};

export default CarList;
