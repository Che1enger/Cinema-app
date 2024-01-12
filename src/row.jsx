import React from 'react';
import './row.css'

const Row = ({ rowNumber,priceChair, numberOfChairs, src, chairClass,rowClass,onSeatClick }) => {
  const chairs = Array.from({ length: numberOfChairs }, (_, index) => index + 1);
  const handleSeatClick = (row, seat,price) => {
    if (onSeatClick) {
      onSeatClick(row, seat, price);
    }
  };
  return (
    <div className={rowClass}>
      <p>{rowNumber}</p>
      <div className="stolya">
        {chairs.map(seat => (
          <img
            key={seat}
            src={src}
            data-row={rowNumber}
            data-seat={seat}
            className={chairClass}
            price={priceChair}
            onClick={() => handleSeatClick(rowNumber,seat,priceChair)}
            alt=''
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
