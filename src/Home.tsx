import './Home.css';

import { Link } from 'react-router-dom';
import React from "react";
import logo from './logo.svg';

const Home: () => React.ReactElement = (): React.ReactElement => {
    return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Click <Link to="/react-hook-form">here</Link> React Hook Form</p>
      <p>Click <Link to="/formik-form">here</Link> Formik</p>
    </header>
  </div>
  );
};
export default Home;