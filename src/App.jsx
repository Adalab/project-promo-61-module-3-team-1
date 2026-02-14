import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GetAvatar from './components/GetAvatar/GetAvatar';
import Profile from './components/Profile/Profile';
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

  return (
    <BrowserRouter>
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
                  <Preview />
                  <Form />
                  <Footer />
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
