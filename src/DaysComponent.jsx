import React from 'react';
import './DaysComponent.css'; // Подключите ваши стили для компонента

const DaysComponent = () => {
  const daysData = [
    { name: 'SAT', date: '6 may' },
    { name: 'SUN', date: '7 may' },
    { name: 'MON', date: '8 may' },
    { name: 'TUE', date: '9 may' },
    { name: 'WED', date: '10 may' },
    { name: 'THU', date: '11 may' },
    { name: 'FRI', date: '12 may' },
    { name: 'SAT', date: '13 may' },
    { name: 'SUN', date: '14 may' },
    { name: 'MON', date: '15 may' },
  ];

  return (
    <div className="days">
      {daysData.map((day, index) => (
        <div key={index} className="day">
          <div className="name">{day.name}</div>
          <div className="date">{day.date}</div>
        </div>
      ))}
    </div>
  );
};

export default DaysComponent;
