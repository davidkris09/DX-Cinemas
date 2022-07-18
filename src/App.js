import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Movies }  from './components/views/movies'

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Movies/>}/>
        </Routes>
      </>
    )
  }
}

export default App;
