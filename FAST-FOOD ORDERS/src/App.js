import React from 'react';
import './App.css';
import FormOrder from './FormOrder'

const App = () => {

  return (

    <div className="App">
      <header className="App-header">FAST FOOD ORDERS</header>
      <div className="dishes">
        <FormOrder />
      </div>
    </div>
  );
};

export default App;
