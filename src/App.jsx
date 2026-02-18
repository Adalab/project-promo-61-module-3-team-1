
//import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import GetAvatar from './components/GetAvatar/GetAvatar';
import Profile from './components/Profile/Profile';
import './main.scss';
import { saveInStorage, loadFromStorage } from "./services/LocalStorage";

import Form from './components/Form/Form';
import Hero from './components/Hero/Hero';
import Preview from './components/Preview/Preview';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing';
import CardPage from './pages/CardPage';



function App() {
  // const [avatar, setAvatar] = useState('');

  // const updateAvatar = (avatar) => {
  //   setAvatar(avatar);
  // };

  //Imagen proyecto
  const updateProjectAvatar = (projectAvatar) => {
    setFormData({
      ...formData,
      image: projectAvatar
    });
  };

  //Avatar autora
  const updateAuthorAvatar = (authorImage) => {
  setFormData({
    ...formData,
    photo: authorImage
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
    }
  );

  useEffect(() => {
    saveInStorage(formData);
  }, [formData]);

  const resetForm = () => {
    const emptyData = {
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
    }
    
    setFormData(emptyData);
    localStorage.removeItem("formData");
  };


 return (
  <div>
    <Header />
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
            {/* <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
            <Profile avatar={avatar} /> */}
            <div className='container'>
              <main className='main'>
                <Header />
                <Hero />
                <Preview formData={formData} />
                <Form
                  formData={formData}
                  setFormData={setFormData}
                  resetForm={resetForm}
                  updateAuthorAvatar={updateAuthorAvatar}
                  updateProjectAvatar={updateProjectAvatar}
                />
              </main>
            </div>
          </div>
        }
      />

      {/* Página cardUrl */}
      <Route
        path="/cardPage"
        element={<CardPage formData={formData} />}
      />

    </Routes>
    <Footer />
  </div>
);

}

export default App;
