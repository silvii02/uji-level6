import React, { useState } from 'react';
import tombolimage from "../assets/img/tombol.png";

const OrderPage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const [orders, setOrders] = useState([
    {
      id: 1,
      customerImg: 'burger.jpg',
      email: 'customer1@example.com',
      paymentMethod: 'Cash',
      orderStatus1: 'Pending',
      paymentStatus: 'Unpaid'
    },
    {
      id: 2,
      customerImg: 'pizza.jpg',
      email: 'customer2@example.com',
      paymentMethod: 'Card',
      orderStatus1: 'Pending',
      paymentStatus: 'Paid'
    },
    {
      id: 3,
      customerImg: 'pizza.jpg',
      email: 'customer3@example.com',
      paymentMethod: 'Card',
      orderStatus1: 'Batal',
      paymentStatus: 'Unpaid'
    }
  ]);

  const viewDetails = (orderId) => {
    setSelectedOrderId(orderId);
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className='order'>
    <a href="/">
     <img src={tombolimage} alt="tombol-img"  className="icon-d" />
    </a>
      <h2>Order Details</h2>
      <table border="1">
        <thead>
          <tr>
            <th>NO</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Payment method</th>
            <th>Order status</th>
            <th>Payment status</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td><img src={order.customerImg} alt={`Customer ${order.id}`} /></td>
              <td>{order.email}</td>
              <td>{order.paymentMethod}</td>
              <td>
                {order.orderStatus1 === "Pending" && <button style={{ backgroundColor: "#DA3B3B" }}>Pending</button>}
                {order.orderStatus1 === "Batal" && <button style={{ backgroundColor: "#DA3B3B", padding: "8px 30px" }}>Batal</button>}
              </td>
              <td>
                {order.paymentStatus === "Unpaid" && <button style={{ backgroundColor: "#DA3B3B" }}>Unpaid</button>}
                {order.paymentStatus === "Paid" && <button style={{ backgroundColor: "#99E45E", padding: "8px 30px" }}>Paid</button>}
              </td>
              <td><button onClick={() => viewDetails(order.id)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showNotification && (
        <div className="notification-container3">
          <div className="notification-header3">
            <h2>Order Details</h2>
            <button className='x' onClick={closeNotification}>X</button>
          </div>
          <table className="notification-table3">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Unit Price</th>
              </tr>
            </thead>
            {/* Add table rows here */}
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
