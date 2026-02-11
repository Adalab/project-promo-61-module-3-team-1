//import React from 'react';
import { useState } from 'react';
import GetAvatar from './components/cuarentena/GetAvatar';
import Profile from './components/cuarentena/Profile';

function App() {
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };
  return (
    <div>
      <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
      <Profile avatar={avatar} />
    </div>
  );
}

export default App;