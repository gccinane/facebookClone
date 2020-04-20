import React, { Component } from 'react';
import img from '../PostComponent/GUILHERME50ANOS.jpeg';
import { Container, Comment, } from './styles'
export default class CommentComponent extends Component {



  render() {
    const { data } = this.props;

    return (
      <>
        <hr />
        <Container>
          <img src={img} alt="CommentUser" />
          <Comment>
            <h1>{data.author.name}</h1>
            <p >{data.content}</p>

          </Comment>
        </Container >
      </>

    )
  }
}