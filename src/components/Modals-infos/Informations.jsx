import React from 'react'
import './Informations.css'
import sary from '../../assets/sary.jpg'

function Informations({onClose}) {
  return (
    <div className="center informations">
      <div className='badge'>
        <div className='details'>
          <p className='name'>EMASINDRA Eddy Nicolas</p>
          <p>Filière: Informatique de Gestion,Génie Logiciel
            et Intelligence artificielle (IGGLIA 4A)
          </p>
          <p>N°-N°mle: 2-8199/22</p>
          <p>Tel: +261347342140</p>
          <p>Adresse: LOT C 145 J TER ANDRANOMENA TANA 101</p>
          <p>Email: nicolaseddy005@gmail.com</p>
        </div>
        <img src={sary} alt="badge-photos" className='photos'/>
      </div>
      <div className='localisation center'>
        <p>Dernière localisation: grande salle à 14:00</p>
      </div> 
      <span class="material-icons close-btn" onClick={onClose}>
        close
      </span>
    </div>
  )
}

export default Informations