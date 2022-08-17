import React, { useState, useEffect } from 'react';
import Login from './login.jsx';
import Room from './Room.jsx';
import '../App.css';

function Landing({ username, setUsername, device_id, setDevice_id }) {
  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const response = await fetch(`http://localhost:3001/auth/token?authCode=${window.location.href.slice(window.location.href.indexOf("authCode=")+9, window.location.href.length)}`);
      const json = await response.json();
      if (json.access_token && json.refresh_token) {
        console.log('inside');
        setToken(json.access_token);
        setRefreshToken(json.refresh_token);
      }
    }

    getToken();
  }, []);

  return (
    <>
      { (token === '') ? <Login/> : <Room token={token} refreshToken={refreshToken} username={username} setUsername={setUsername} setDevice_id={setDevice_id} device_id={device_id} />}
    </>
  );
}

export default Landing;
