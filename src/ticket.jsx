import React from 'react';
import Shtrith from './img/shtrih.svg'
import './ticket.css'


const Ticket = ({ selectedSeat, screenValue, posterImg, posterName }) => {
  const { row, seat, price } = selectedSeat || {};

  return (
    <div className="ticket">
      <div className="holes-top"></div>
      <div className="pooster">
        <img className="ticket_image" src={posterImg} alt="Movie: Only God Forgives"/>
      </div>
      <div className="infoo">
        <div className="namos">{posterName}</div>
        <table>
          <thead>
            <tr>
              <th>SCREEN</th>
              <th>ROW</th>
              <th>SEAT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bigger">{screenValue}</td>
              <td id="row" className="bigger">{row || 'H'}</td>
              <td id="seat" className="bigger">{seat || 'H'}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>PRICE</th>
              <th>DATE</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="price" className="bigger">{price || 'H'}&euro;</td>
              <td className="bigger">1/1/23</td>
              <td className="bigger">19:30</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="holes-lower"></div>
      <div className="serial">
        <img className="shtrih" src={Shtrith} alt=''/>
      </div>
    </div>
  );
};

export default Ticket;
