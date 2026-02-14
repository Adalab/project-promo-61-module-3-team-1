//import React from 'react';
import { useState, useEffect } from 'react';
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
      <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
      <Profile avatar={avatar} />
      <div className='container'>
        <main className='main'>
          <Header></Header>
          <Hero></Hero>
          <Preview formData={formData}></Preview>
          <Form formData={formData} setFormData={setFormData}></Form>
          <Footer></Footer>
        </main>
      </div>
    </div>
  );
}

export default App;