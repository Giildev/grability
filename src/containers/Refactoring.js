import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/styles';
import logo from '../logo.svg';
import '../App.css';
import './styles.css';

class Refactoring extends Component {
  render() {
    const oldCode =
    `
    function post_confirm(params) {
      const id = params.service_id;
      let servicio = Service.find(id);
      // console.log(servicio);
      if (servicio != NULL) {
        if (servicio.status_id == '6') {
          return {error: '2'};
        }
        if (servicio.driver_id == NULL && servicio.status_id == '1') {
          servicio = Service.update(id, {
              driver_id: params.driver_id,
              status_id: '2'
              //Up carro
              //, pwd: md5(params.pwd)
          });
          Driver.update(params.driver_id, {
            available: '0'
          });
          driverTmp = Driver.find(params.driver_id);
          Service.update(id, {
            car_id: driverTmp.car_id
            //Up carro
            //, pwd: md5(params.pwd)
            });
          //Notificar a usuario!!
          var pushMessage = "Tu servicio ha sido confirmado!";
          /* servicio = Service.find(id);
          push = Push.make();
          if (servicio.user.type == '1') {//iPhone
          pushAns = push.ios(servicio.user.uuid, pushMessage);
          } else {
          pushAns = push.android2(servicio.user.uuid, pushMessage);
          } */
          servicio = Service.find(id);
          push = Push.make();
          if (servicio.user.uuid == '') {
            return {error: '0'};
          }
          if (servicio.user.type == '1') {//iPhone
            push.ios(servicio.user.uuid, pushMessage, 1, 'honk.wav', 'Open', {service_id: service.id});
          } else {
            push.android2(servicio.user.uuid, pushMessage, 1, 'default', 'Open', {service_id: service.id});
          }
          return {error: '0'};
      } else {
        return {error: '1'};
      }
    } else {
      return {error: '3'};
    }
  };
    `;

    const newCode =
    `
    function post_confirm(params) {
      const id = params.service_id;
      let service = Service.find(id);
      if (!!service) {
        (service.status_id == '6') ? {error: '2'} : "";
        if (!!service.driver_id && service.status_id == '1') {
          service = Service.update(id, { driver_id: params.driver_id, status_id: '2' });
          Driver.update(params.driver_id, { available: '0' });
          driverId = Driver.find(params.driver_id);
          Service.update(id, { car_id: driverId.car_id });
          //Notificar a usuario!!
          let message = "Tu servicio ha sido confirmado!";
          service = Service.find(id);
          push = Push.make();
          (!service.user.uuid) ? {error: '0'} : "";
          (service.user.type == '1')
            ? push.ios(service.user.uuid, message, 1, 'honk.wav', 'Open', { service_id: service.id });
            : push.android2(service.user.uuid, message, 1, 'default', 'Open', { service_id: service.id });
        } else {
          return {
            error: '1'
          };
        }
      } else {
        return {
          error: '3'
        };
      }
    };
    `;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Refactoring</h2>
          <Link to="/" className="back">
            Back
          </Link>
        </div>
        <div>
          <h3 className="questions">Las malas prácticas de programación que en su criterio son evidenciadas en el código</h3>
          <ul className="answers">
            <li>Usar 2 idiomas en el mismo codigo (Español e Ingles)</li>
            <li>Operaciones para validar si una variable viene vacia colocando (variable == '')</li>
            <li>Comentarios, las mejores practicas es dejar el codigo lo mas limpio posible (si necesitamos recordar un codigo que habiamos escrito, para eso tenemos git)</li>
          </ul>

          <h3 className="questions">Cómo su refactorización supera las malas prácticas</h3>
          <ul className="answers">
            <li>Utilizar solo 1 idioma (ingles)</li>
            <li>Validar si una variable viene vacia (!variable)</li>
            <li>Operaciones ternarias en vez de "if" largos</li>
          </ul>
        </div>
        <div>
          <div className="oldCode">
            <SyntaxHighlighter language='javascript' style={solarizedDark}>{oldCode}</SyntaxHighlighter>
          </div>
          <div className="newCode">
            <SyntaxHighlighter language='javascript' style={solarizedDark}>{newCode}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default Refactoring;
