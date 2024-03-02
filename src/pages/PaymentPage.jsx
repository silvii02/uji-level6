import React, { useState } from 'react';

const PaymentPage = () => {
  const [username, setUsername] = useState('');
  const [username1, setUsername1] = useState('');

  const handleLogin = () => {
    // Tempatkan logika autentikasi di sini (misalnya, panggil API login)

    // Contoh sederhana: Validasi username dan password
    if (username === 'user' && password === 'password') {
      // Login berhasil
      console.log('Login berhasil!'); // Tampilkan pesan ke konsol
      // Tempatkan logika navigasi ke halaman selanjutnya di sini
    } else {
      // Login gagal
      console.log('Login gagal. Periksa kembali username dan password.'); // Tampilkan pesan ke konsol
    }
  };

  return (
    <div className="payment-container">
      <h1>Metode Pembayaran</h1>
      <form className="payment-form">
        <label>
          <input
            className="payment-input"
            type="text" placeholder="Qris"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
         <label>
          <input
            className="payment-input"
            type="text" placeholder="Cash"
            value={username1}
            onChange={(e) => setUsername1(e.target.value)}
          />
        </label>
        <button className="login-button" type="button" onClick={handleLogin}>
          Bayar
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
