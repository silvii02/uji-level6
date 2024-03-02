import { Container, Row, Col, Button } from "react-bootstrap"
import React, { useState } from "react";
import nasgor1Image from"../assets/img/nasgor1.png"
import { useNavigate } from "react-router-dom"; // Import useNavigate
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import aboutImage from "../assets/img/about.png";
import { Link } from 'react-router-dom';
<script src="https://kit.fontawesome.com/08df0cef86.js" crossorigin="anonymous"></script>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';


const HomePage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleMasukClick = () => {
    setShowNotification(true);
  };

  const handleYaClick = () => {
    setShowNotification(false);
    navigate("/Daftar"); // Use navigate to go to the login page
  };

  const handleTidakClick = () => {
    setShowNotification(false);
    navigate("/LoginPage");
    // Handle logic if "Tidak" button is clicked
  };

  return (
    <><>
    
    <div className="homepage" id="HomePage">
      <NavbarComponent />
      <header className="w-100 d-flex align-items-center banner1">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
            <h1 className="mb-">
              <span className="color1">Selamat</span>
              <span className="color2"> Datang</span>
            </h1>
              <span className="kata" >Di Kedai Katresna rasakan sensasi</span> <br />
              <span className="kata1">makanan terbaik kami.</span>
              <p className="mb-5"></p>
<button className="button5" onClick={handleMasukClick}>
                Masuk
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img className="image" src={nasgor1Image} alt="nasgor1-img" />
            </Col>
          </Row>
        </Container>
      </header>
          {/* Notification */}
            {showNotification && (
        <div className="notification">
          <p>Apakah sudah punya akun?</p>
          <div className="button2-container2">
            <button onClick={handleTidakClick}>YES</button>
            <button onClick={handleYaClick}>NO</button>
          </div>
        </div>
      )}
    </div>

    {/*AboutPage*/}
    <div className="AboutPage" id="AboutPage">
      <header className="about w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" className="text-left">
            <h1 className="mb-">
        <span className="color3">Kedai</span>
          <span className="color4"> Katresna</span>
        </h1>
        <p>
          kedai katresna adalah kedai yang berdiri sejak <br /> 2023. Kedai ini menyediakan berbagai macam <br /> makanan dari mulai harga termurah sampai <br />termahal.
        </p>
              {/* Add your text here */}
            </Col>
            <Col lg="6">
            <img src={aboutImage} alt="about-img" className="about-image" style={{ maxWidth: '100%', marginLeft: '93px', marginBottom: '45px', display: 'block' }} />
</Col>

          </Row>
        </Container>
      </header>
  

        {/*ContactPage*/}
    <div className="banner" id="ContactPage">
    <Container>
          <Row className="header-box">
            <Col lg={6} className="d-flex align-items-center">
              <div className="contact-info">
                <h1>
                  <span className="color5">CONTACT</span>
                  <span className="color6"> US</span>
                </h1>
                <p><FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />{' '}kedaikecresna@gmail.com</p>
                <p><FontAwesomeIcon icon={faUserGroup} size="2x" className="icon" />{' '}0857-1961-0715</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="icon" />{' '}SMKN 1 CIOMAS</p>
              </div>
            </Col>

            <Col lg={6}>
              <div className="contact-container">
                <form className="contact-form">
                  <label>Nama *</label>
                  <input type="text" name="nama" />

                  <label>Nomor telepon *</label>
                  <input type="tel" name="telepon" />

                  <label>Pesan *</label>
                  <textarea name="pesan" rows="4"></textarea>

                  <div className="button-container">
                    <button type="submit"><strong>Kirim</strong></button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
      </div></><FooterComponent /></>
  )
}
export default HomePage