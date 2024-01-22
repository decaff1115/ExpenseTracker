import axios from "axios";
import logo from "../assets/logo.png";
import firstright from "../assets/firstright.png";
import secondleft from "../assets/secondleft.png";
import fblogo from "../assets/fblogo.png";
import linkedlogo from "../assets/linkedlogo.png";
import iglogo from "../assets/iglogo.png";



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
useEffect

const Start = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/verify')
      .then(result => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate('/dashboard')
          } else {
            navigate('/employee_detail/' + result.data.id)
          }
        }
      }).catch(err => console.log(err))
  }, [])

  return (

    <div className="App" style={{ backgroundColor: 'white' }}>
      <div className='header'>
        <img src={logo} className='logo' alt="Your Logo" />
        <div className="login-container">
          
          <div className="wrappedButtons">
            <div>
              <button type="button" className="employeeButton" onClick={() => { navigate('/signup') }}>
                Sign-up
              </button>
            </div>

            <div>
              <button type="button" className="adminButton" onClick={() => { navigate('/login') }}>
                Login
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className='first-p'>
      <img src={firstright} className='firstright' alt="Your Logo" />
      </div>

      <div className='footer'>

        <footer >
          <div className="footer-container">
            <div className="footer-column">
              <h3>Email Address</h3>
              <p>loremsample@gmail.com</p>
            </div>
            <div className="footer-column">
              <h1>LoremDev</h1>
              <hr></hr>
              <p>CONNECT WITH THE DEVELOPMENT TEAM</p>
              <div className="social-icons">

                <a href="https://youtu.be/doEqUhFiQS4">
                  <img src={fblogo} alt="Facebook" />
                </a>
                <a href="https://youtu.be/doEqUhFiQS4">
                  <img src={iglogo} alt="Instagram" />
                </a>
                <a href="https://youtu.be/doEqUhFiQS4">
                  <img src={linkedlogo} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Address</h3>
              <p>Nasipit, Talamban, Cebu City</p>
              <h3>Contact Number</h3>
              <p>09123546789</p>
            </div>
          </div>
          <div className="footer-bottom">
            <center>
            © 2023
            </center>
          </div>
        </footer>
      </div>
    </div>

  );
};

export default Start;
