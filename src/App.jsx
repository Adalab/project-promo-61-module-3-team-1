
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import React from 'react';
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

import './main.scss';

function App() {
  const [avatar, setAvatar] = useState('');

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  //Imagen proyecto
  const updateProjectAvatar = (projectAvatar) => {
    setFormData({
      ...formData,
      image: projectAvatar
    });
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

      <Routes>

        {/* Landing */}
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
                   <Form formData={formData} setFormData={setFormData} updateProjectAvatar={updateProjectAvatar}></Form>
                  <Footer />
                </main>
              </div>
            </div>
          } 
        />

      </Routes>
   

        )
      }



export default App;
