import React, {Component} from 'react';
import logo from '../logo.svg';
import {
  Link
} from 'react-router-dom'
import '../App.css';

class Questions extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Questions</h2>
          <Link to="/" className="back">
            Back
          </Link>
        </div>
        <div className="App-intro">
          <div>
            <h3 className="questions">¿En qué consiste el principio de responsabilidad única ? ¿Cual es su propósito?</h3>
            <div className="answerSRP">
              El principio de responsabilidad única u SRP (siglas del inglés (Single Responsibility Principle) establece que cada módulo o clase debe tener responsabilidad sobre una sola parte de la funcionalidad proporcionada por el software y esta responsabilidad debe estar encapsulada en su totalidad por la clase. Todos sus servicios deben estar estrechamente alineados con esa responsabilidad.
              <br/><br/>En programación orientada a objetos, se suele definir como principio de diseño que cada clase debe tener una única responsabilidad, y que esta debe estar contenida únicamente en la clase. Así:
              <ul>
                <li>Una clase debería tener sólo una razón para cambiar</li>
                <li>Cada responsabilidad es el eje del cambio</li>
                <li>Para contener la propagación del cambio, debemos separar las responsabilidades.</li>
                <li>Si una clase asume más de una responsabilidad, será más sensible al cambio.</li>
                <li>Si una clase asume más de una responsabilidad, las responsabilidades se acoplan.</li>
              </ul>
            </div>

            <h3 className="questions">¿Que características tiene según su opinión “buen” código o código limpio?</h3>
            <ul className="answers">
              <li>Utilizar solo 1 idioma (ingles)</li>
              <li>DRY - reutilizar codigo</li>
              <li>Evitar codigos extensos</li>
              <li>Codigo bien indentado</li>
              <li>Declarar variables con nombres explicitos</li>
              <li>ETC...</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
