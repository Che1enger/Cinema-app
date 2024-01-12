import React from 'react';
import StoolWhite from './img/stool_white.svg'
import VipStoolWhite from './img/VipStool_white.svg'
import './price.css'

const Price = () => {
  return (
    <div className="price">
      <div className="juststool">
        <img src={StoolWhite} alt='stool-img'/>
        <p className="justname">Regular</p>
        <p id="standard-price" data-price="5&euro;" className="justprice">
          5&euro;
        </p>
      </div>
      <div id="vip-price" className="vipstools">
        <img src={VipStoolWhite} alt="VIP Stool" />
        <p className="vipname">Vip</p>
        <p id="vip-price" data-price="10&euro;" className="vipprice">
          10&euro;
        </p>
      </div>
    </div>
  );
};

export default Price;
