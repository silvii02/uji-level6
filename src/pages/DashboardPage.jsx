import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tombolimage from "../assets/img/tombol.png";
import iconimage from "../assets/img/icon.png";
import { faUsers, faTableCellsLarge, faBoxOpen, faListUl } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
  return (
    <>
    <div className='dashboard'>
    <a href="/">
     <img src={tombolimage} alt="tombol-img"  className="icon-d" />
    </a>
    <div className="button-group">
      <button className="purple-button">
        <FontAwesomeIcon icon={faUsers} size="3x" className="icon" /> {/* Menggunakan size="3x" untuk memperbesar ikon */}
        <span>Total Users</span>
        <p>1</p>
      </button>
      <button className="blue-button">
        <FontAwesomeIcon icon={faTableCellsLarge} size="3x" className="icon" /> {/* Menggunakan size="3x" untuk memperbesar ikon */}
        <span>Total Categories</span>
        <p>2</p>
      </button>
      <button className="green-button">
        <img src={iconimage} alt="icon-img" className="icon1" /> {/* Menggunakan size="3x" untuk memperbesar ikon */}
        <span>Total Products</span>
        <p>1</p>
      </button>
      <button className="red-button">
        <FontAwesomeIcon icon={faListUl} size="3x" className="icon" /> {/* Menggunakan size="3x" untuk memperbesar ikon */}
        <span>Total Orders</span>
        <p>1</p>
      </button>
    </div>
    </div>
    </>
  );
};

export default DashboardPage;
