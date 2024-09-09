import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
      <section>
          <h1>¡Bienvenidos a mi aplicación React!</h1>
          <p className='p'>Lista de cosas por hacer:</p>
          <ul className='lista'>
            <li>Aprender React</li>
            <li>Prácticar con Vite </li>
            <li>Construir proyectos increibles </li>
          </ul>
      </section>
  );
}
export default App