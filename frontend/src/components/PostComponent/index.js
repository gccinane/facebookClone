import React, { Component } from 'react'
import { Name, Date, Content } from './styles';
export default class PostComponent extends Component {


  render() {
    const { data } = this.props;
    return (

      <>
        <Name>{data.author.name}</Name>
        <Date>{data.date}</Date>
        <Content>{data.content}</Content>
      </>
    )
  }
}