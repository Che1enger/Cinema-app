import React from 'react';
import Cart from './img/cart.svg';
import './confirm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Confirm = ({ price, row, seat }) => {
  const notifyError = () => toast.error("Error: Invalid Ticket!");
  const notify = () => toast.success("Ticket purchased!");
  const handleConfirmClick = () => {
    if (price === 'H' && row === 'H' && seat === 'H') {
      notifyError();
    } else {
      notify();
    }
  };

  return (
    <div className="confirm" onClick={handleConfirmClick}>
      <div className="confirm_text">
        Solve
      </div>
      <div className="confirm_icon">
        <img src={Cart} alt="telega" />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Confirm;







