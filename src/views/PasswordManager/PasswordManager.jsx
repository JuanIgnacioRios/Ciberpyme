import React from 'react'
import './PasswordManager.css'

const PasswordManager = () => {
  return (
    <section id='password-manager-container'>
        <div id='first-section'>
            <div id='info-container'>
                <h2>¿Qué tan segura es mi contraseña?</h2>
                <p>Tomate un momento para comprobar si tus contraseñas son vulnerables a posibles ataques. No recopilamos ni almacenamos las contraseñas.</p>
            </div>
            <img src="/security-bot.png" alt="" />
        </div>
        <div id='password-input-container'>
            <input type="password" placeholder='Comprobá tu contraseña'/>
            <button>Validar</button>
        </div>
    </section>
  )
}

export default PasswordManager