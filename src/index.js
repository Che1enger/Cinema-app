import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import Film from './film';
import Header from './header';
import './index.css'
import TicketPage from './ticketPage';
import Market from './marketPage';
import About from './about';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film" element={<Film />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/market" element={<Market/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));