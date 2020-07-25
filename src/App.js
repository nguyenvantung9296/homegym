
import React from 'react';
import Nav from './component/Navbar'
import Foodter from './component/Foodter/foodter'
import './App.css'
import DieuHuongURL from './Router/DieuHuongURL';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {DataProvider} from './component/ShoppingCart/Context'


function App() {
  console.log('App')

  return (
    <DataProvider>
    <Router>
      <div >
        <Nav />
        <DieuHuongURL />
        <Foodter />
      </div>
    </Router>
    </DataProvider>
  );
}

export default App;
