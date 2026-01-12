import React from "react";
import "./cars.css";
import carsData from "../../../Data/carsdata";

function Cars() {

  const handleBook = (carName) => {
    alert(`You have selected ${carName}`);
  
  };

  return (
    <section className="cars" id="carss">
      <h1>Our Cars</h1>
      <p className="cars-tagline">Choose from 20+ well-maintained vehicles</p>

      <div className="cars-container">
        {carsData.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.img} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.type}</p>
            <span>{car.price} </span>

            <button 
              className="book-btn"
              onClick={() => handleBook(car.name)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cars;
