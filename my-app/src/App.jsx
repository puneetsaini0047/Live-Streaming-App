import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Room from './Pages/Room';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:RoomID' element={<Room />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
