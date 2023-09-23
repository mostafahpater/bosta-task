// import logo from './logo.svg';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getTrackingWithNum } from './redux/tracking/TrackingSlice';
import { Route,  Routes } from 'react-router-dom';
import Tracking from './pages/tracking/Tracking';
import { useState } from 'react';
import Nav from './components/global/Nav';
import Routers from './Routers';
import strings from './traslate/Translate';

function App() {
  const [language,setLanguage]=useState('en')
  strings.setLanguage(language)
  return (
  <div dir={`${language==='en'?'ltr':'rtl'}`}>
     <Nav setLanguage={setLanguage} language={language}/>

<Routers language={language}/>
  </div>
  );
}

export default App;
