import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Correo</th>
      <th scope="col">Celular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cristian David</td>
      <td>Cano Uribe</td>
      <td>cristiancano@inemjose.edu.co</td>
      <td>647886</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Camilo Andrés</td>
      <td>Marín Jaramillo</td>
      <td>bakurdo13@gmail.com</td>
      <td>647887</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Yorman</td>
      <td>Zapata</td>
      <td>yorman@inemjose.edu.co</td>
      <td>647889</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>David</td>
      <td>Rave</td>
      <td>rave@gmail.com</td>
      <td>647866</td>
    </tr>
  </tbody>
</table>
  );
}

export default App;
