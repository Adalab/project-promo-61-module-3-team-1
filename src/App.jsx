import { useState, useEffect } from 'react';
import { Routes, Route} from "react-router-dom";

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

import './main.scss';

function App() {
  const [avatar, setAvatar] = useState('');

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

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
    localStorage.removeItem("FormData");
  };


  return (
      <Routes>

        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Formulario */}
        <Route path="/form" element={

        <>
              <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />

              <div className='container'>
                <main className='main'>

                  <Header/>
                  <Hero/>
                  <Preview formData={formData} avatar={avatar}></Preview>
                  <Form formData={formData} setFormData={setFormData} resetForm={resetForm}></Form>
                  <Footer/>
                </main>
              </div>
              </>
            }
            />

      </Routes>

  );
}

export default App;
