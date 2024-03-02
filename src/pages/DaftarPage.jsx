// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DaftarPage = () => {
  const [username, setUsername] = useState('');
  const [username6, setUsername6] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const handleLogin = () => {
    // Fungsi untuk menangani logika login
  };

  return (
    <div className="login-container">
      <Link to="/">
        <div className="icon-with-text">
          <FontAwesomeIcon className='icon-1' icon={faArrowLeft} />
          <span>kembali</span>
        </div>
      </Link>
      <form className="login-form">
        <label>
          <input
            className="login-input"
            type="text" placeholder="Nama"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <input
            className="login-input"
            type="text" placeholder="Email"
            value={username6}
            onChange={(e) => setUsername6(e.target.value)}
          />
        </label>
        <label>
          <input
            className="login-input"
            type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            className="login-input"
            type="password" placeholder="Ketik ulang Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </label>
        <Link to="/home"> {/* Ganti '/halaman-setelah-daftar' dengan path halaman setelah login */}
          <button className="login-button" onClick={handleLogin}> {/* Menggunakan onClick untuk menangani logika login */}
            DAFTAR
          </button>
        </Link>
      </form>
    </div>
  );
};

export default DaftarPage;
