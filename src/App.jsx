import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<Landing />} />
        <Route 
          path="/app" 
          element={
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
          } 
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
