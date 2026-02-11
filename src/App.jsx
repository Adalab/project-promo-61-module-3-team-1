//import React from 'react';
import { useState } from 'react';
import GetAvatar from './components/GetAvatar/GetAvatar';
import Profile from './components/Profile/Profile';
import './main.scss'
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
  return (
    <div>
      <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
      <Profile avatar={avatar} />
      <div className='container'>
        <main className='main'>
          <Header></Header>
          <Hero></Hero>
          <Preview></Preview>
          <Form></Form>
          <Footer></Footer>
        </main>
      </div>
    </div>
  );
}

export default App;