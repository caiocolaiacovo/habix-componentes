import React, { Component } from 'react';

export default class BarraDeNavegacao extends Component {
  render() {
    return (
      <nav className="menu-lateral menu-lateral_fixo menu-lateral_minimizado">
        <ul className="menu-lateral__lista">
          <li className="menu-lateral__item">
            <a className="menu-lateral__link" href="/usuario">
              <i className="fa fa-user menu-lateral__icone" aria-hidden="true"></i>
              <span className="menu-lateral__texto">Usuário</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}