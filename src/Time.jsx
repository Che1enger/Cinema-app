import React from 'react';
import './time.css'; // Подключите ваши стили для компонента

const Time = () => {
  const times = [
    '9:00', '10:00', '11:25', '12:00', '12:45', '13:30', '15:00', '16:30', '17:00', '19:00', '19:30', '20:30'
  ];

  return (
    <div className="time">
      {times.map((time, index) => (
        <div key={index}>{time}</div>
      ))}
    </div>
  );
};

export default Time;
