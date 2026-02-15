
//import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Routes, Route } from "react-router-dom";

import GetAvatar from './components/GetAvatar/GetAvatar';
import Profile from './components/Profile/Profile';
import './main.scss';
import { saveInStorage, loadFromStorage } from "./services/LocalStorage";

//componentes
import Form from './components/Form/Form';
import Hero from './components/Hero/Hero';
import Preview from './components/Preview/Preview';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing';
import CardPage from './pages/CardPage';



function App() {
  const [avatar, setAvatar] = useState('');

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

    //Estado del formulario - cargar LocalStorage
  
  const [formData, setFormData] = useState(
    loadFromStorage() || {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });

  //Guardar en LocalStorage
  useEffect (() => {
    saveInStorage(formData)
  }, [formData]);

  return (
    <div>
      <Routes>

          {/* Landing Page*/}
          <Route 
            path="/" 
            element={<Landing />} 
          />

          {/* Página actual con formulario */}
          <Route 
            path="/form" 
            element={
              <div>
                <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
                <Profile avatar={avatar} />
                <div className='container'>
                  <main className='main'>
                    <Header />
                    <Hero />
                    <Preview formData={formData}></Preview>
                    <Form formData={formData} setFormData={setFormData}></Form>
                  </main>
                </div>
              </div>
            } 
          />
          {/* Página actual con formulario */}
          <Route 
            path="/cardPage" 
            element={<CardPage formData={formData} setFormData={setFormData}/>} 
          />
      </Routes>
      <Footer></Footer>
    </div>

  );
}



export default App;
