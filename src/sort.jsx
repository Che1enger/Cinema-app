import React from 'react';
import DaysComponent from './DaysComponent';
import './sort.css'; // Подключите ваши стили для компонента
import gps from './img/gps.svg';
import LeftArrow from './img/left_arrow.svg';
import  Filter from './img/filter.svg';



const Sort = () => {
  return (
    <div className="sort">
      <div className="gps">
        <img src={gps} alt="gps" />Tallinn
      </div>
      <div className="left_arrow">
        <img src={LeftArrow} alt="arrow" />
      </div>
      <div className="days">
        <DaysComponent></DaysComponent>
      </div>
      <div className="right_arrow">
        <img src={LeftArrow} alt="arrow" />
      </div>
      <div className="filter">
        <div className="img_filter">
          <img src={Filter} alt="filter" />
        </div>
        <div className="name_subname">
          <div className="name_name">Filter</div>
          <div className="subname">All movies</div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
