
import React from 'react';
import { CheckboxProvider } from './CheckboxContect';
import AuthPage from './AuthPage';

import "../styles/globals.css";
import "../styles/navbar.css";

function App() {
  return (
    <CheckboxProvider>
      <AuthPage />
    </CheckboxProvider>
  );
}

export default App;