import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import { Page2 } from './page2';

const Home = () => {
  return (
       <div>
         <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="App" element={<App/>}/>
            <Route path="Page2" element={<Page2/>}/>
         </Routes>
       </div>
  );
}

export default Home;
