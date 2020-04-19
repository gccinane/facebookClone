import React, { Component } from 'react';
import { Header } from './styles';
import { FaUser } from 'react-icons/fa'


export default class HeaderComponent extends Component {


  render() {
    return (
      <Header>
        <h1>facebook</h1>
        <p>
          Meu perfil
        </p>
        <FaUser />
      </Header>

    )
  }
}