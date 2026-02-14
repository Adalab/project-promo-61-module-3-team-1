//import React from 'react';
import { useState } from 'react';
import GetAvatar from './components/GetAvatar/GetAvatar';
import Profile from './components/Profile/Profile';
import './main.scss'

import { Link, Route, Routes } from "react-router-dom";

//componentes
import Form from './components/Form/Form';
import Hero from './components/Hero/Hero';
import Preview from './components/Preview/Preview';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//servicios
//import sendDataToApi from '../services/api';


function App() {
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

 /* useEffect(() => {
    sendDataToApi()

  }, []);*/

  return (
    <div>

      <Routes>
          <Route
            path="/"
            element={
              <section className="hero">
                  <h2 className="title black">Proyectos molones</h2>
                  <p className="hero__text black">Escaparate en línea para recoger ideas a través de la tecnología</p>
                  <Link to="/form"className="button--link black" >Ver proyectos</Link>
                  
              </section>
            }
          />
          <Route
            path="/form"
            element={
              <nav>
                <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
                <Profile avatar={avatar} />
                <div className='container'>
                  <main className='main'>
                    <Header></Header>
                    <Hero></Hero>
                    <Preview></Preview>
                    <Form></Form>
                    
                  </main>
                </div>
              </nav>
            }
          />
          
      </Routes>
      
      <Link to="/"><Footer></Footer></Link>
    </div>
  );
}

export default App;