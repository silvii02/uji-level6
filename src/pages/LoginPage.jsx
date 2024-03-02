// src/Login.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [username6, setUsername6] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Tempatkan logika autentikasi di sini (misalnya, panggil API login)

    // Contoh sederhana: Validasi username dan password
    if (username === 'user' && password === 'password') {
      alert('Login berhasil!');
    } else {
      alert('Login gagal. Periksa kembali username dan password.');
    }
  };

  return (
    <div className="login-container1">
      <a href="/">
      <div className="icon-with-text">
        <FontAwesomeIcon className='icon-1' icon={faArrowLeft} />
        <span>kembali</span>
      </div>
      </a>
      <form className="login-form1">
         <label>
          <input
            className="login-input1"
            type="text" placeholder="Email"
            value={username6}
            onChange={(e) => setUsername6(e.target.value)}
          />
        </label>
        <label>
          <input
            className="login-input2"
            type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button1" type="button" onClick={handleLogin}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginPage;