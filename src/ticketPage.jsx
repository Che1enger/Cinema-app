import { useLocation } from 'react-router-dom';
import Price from './price';
import Ticket from './ticket';
import { useState } from 'react';
import './ticketPage.css'
import Screeni from './img/screen.svg'
import Row from './row';
import Stool from './img/stool.svg'
import VipStool from './img/VipStool.svg'
import Confirm from './confirm';


const TicketPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const screen = params.get('screen');
    const posterName = params.get('movieName');
    const image = params.get('image');
    const Chair = "stool-img";
    const VipChair = "vipstool";
    const Row1 = "row1";
    const VipRow = "viprow";
    const pChair = 5;
    const pVChair = 10;
    const [selectedSeat, setSelectedSeat] = useState({
        price: 'H',  
        row: 'H',    
        seat: 'H',   
      });


    const handleSeatClick = (row, seat, price) => {
      setSelectedSeat({ row, seat, price });
    };
    

   return(
    <>
        <div className="screens">
            <img src={Screeni} alt='screen'/>
        </div>
        <div className='stools'>
            <Row rowNumber={1} numberOfChairs={22} src={Stool} priceChair={pChair} chairClass={Chair} rowClass={Row1} onSeatClick={handleSeatClick} /> 
            <Row rowNumber={2} numberOfChairs={22} src={Stool} priceChair={pChair} chairClass={Chair} rowClass={Row1} onSeatClick={handleSeatClick} /> 
            <Row rowNumber={3} numberOfChairs={22} src={Stool} priceChair={pChair} chairClass={Chair} rowClass={Row1} onSeatClick={handleSeatClick} /> 
            <Row rowNumber={4} numberOfChairs={22} src={Stool} priceChair={pChair} chairClass={Chair} rowClass={Row1} onSeatClick={handleSeatClick} /> 
            <Row rowNumber={5} numberOfChairs={22} src={Stool} priceChair={pChair} chairClass={Chair} rowClass={Row1} onSeatClick={handleSeatClick} /> 
            <Row rowNumber={6} numberOfChairs={22} src={Stool} priceChair={pChair} chairClass={Chair} rowClass={Row1} onSeatClick={handleSeatClick} /> 
            <Row rowNumber={7} numberOfChairs={22} src={Stool} priceChair={pChair} chairClass={Chair} rowClass={Row1} onSeatClick={handleSeatClick} /> 
            <Row rowNumber={8} numberOfChairs={11} src={VipStool} priceChair={pVChair} chairClass={VipChair} rowClass={VipRow} onSeatClick={handleSeatClick} /> 
            <Row rowNumber={9} numberOfChairs={11} src={VipStool} priceChair={pVChair} chairClass={VipChair} rowClass={VipRow} onSeatClick={handleSeatClick} /> 
        </div>
        <Price/>
        <Ticket selectedSeat={selectedSeat} screenValue={screen} posterImg={image} posterName={posterName} />
        <Confirm
          price={selectedSeat?.price}
          row={selectedSeat?.row}
          seat={selectedSeat?.seat}
        />
    </>
        
   
    );
    

    
    

};

export default TicketPage;