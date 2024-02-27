import React from 'react'
import logo from '../assets/logo.png'
import './Landing.css'
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'
import vector3 from '../assets/vector3.png'
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate();

    const handleStarted = () => {
        navigate('/home');
    }
  return (
    <div className='landing'>
        <div className='header'>
            <img src={logo} alt="logo" />
            <div className='button' onClick={handleStarted}>
                <p>GET STARTED</p>
            </div>
        </div>
        <div className='center content'> 
            <div className='vector3'>
                <img src={vector3} alt="vector3" />
            </div>
            <div className='container'>
                <p className='welcome'>WELCOME TO GLOBAL TRACK</p>
                <p className='description'>
                    IT'S A FACIAL IT IS A FACIAL RECOGNITON APPLICATION BASED 
                    ON<br/> SURVEILLANCE CAMERAS TO LOCATE A PERSON IN A <br/>
                    UNIVERSITY ENVIRONMENT.
                </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique nulla</p>
            </div>
            <div className='demo'>
                <img src={vector1} alt="vector1" />
                <p style={{cursor: "pointer"}}>Watch Demo</p>
            </div>
        </div>
        <img className='vector2' src={vector2} alt="vector2" />
        <div className='footer '>
            <div className='center cards'>
                <div className='about'>
                    <h4 className='title'>ABOUT US</h4>
                    <div>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Linkedin</p>
                    </div>
                </div>
                <div className='informations'>
                    <h4 className='title'>OUR INFORMATIONS</h4>
                    <div>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Consents Preferences</p>
                    </div>
                </div>
                <div className='contact'>
                    <img src={logo} alt="logo" />
                    <p>contact@globaltrack.com</p>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default Landing
