import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home.jsx';
import Film from './film.jsx';
import Header from './header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/film" component={Film} />
      </Routes>
    </>
  );
};

export default App;
