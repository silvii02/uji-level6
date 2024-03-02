import React, { useState } from 'react';


function KeranjangPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Produk 1', price: 10, quantity: 2, image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Produk 2', price: 20, quantity: 1, image: 'https://via.placeholder.com/50' },
    // Tambahkan item lain jika diperlukan
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <h1>Keranjang Belanja</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <button onClick={() => handleRemoveItem(item.id)}>Hapus</button>
          </li>
        ))}
      </ul>
      <p>Total Harga: ${getTotalPrice()}</p>
    </div>
  );
}

export default KeranjangPage;
