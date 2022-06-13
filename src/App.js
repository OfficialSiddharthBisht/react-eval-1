import React from 'react';
import './App.css';
import ProductListing from './components/ProductListing';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
     <ProductForm />
     <ProductListing />
    </div>
  );
}

export default App;
