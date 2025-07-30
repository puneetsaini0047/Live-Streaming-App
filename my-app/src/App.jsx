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
          {/* Changed from :RoomID to :roomId for consistency */}
          <Route path='/room/:roomId' element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;