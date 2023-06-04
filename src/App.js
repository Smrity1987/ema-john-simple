import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Productdetail from './components/ProductDetail/Productdetail';
import Notfound from './components/NotFound/Notfound';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/shop" element={ <Shop></Shop>}></Route>
          <Route path="/review" element ={<Review></Review>}></Route>
          <Route path="/inventory" element ={<Inventory></Inventory>}></Route>
          <Route exact path="/" element ={<Shop></Shop>}></Route>
          <Route path="/product/:productKey" element ={<Productdetail></Productdetail>}></Route>
          <Route path="*" element ={<Notfound></Notfound>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
