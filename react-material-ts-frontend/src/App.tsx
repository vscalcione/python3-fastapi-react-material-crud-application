import React from 'react';
import logo from './logo.svg';
import './App.css';

import { NavbarComponent } from './components/navbar/NavbarComponent';
import { FormComponent } from './components/form/FormComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <FormComponent />
    </div>
  );
}

export default App;
