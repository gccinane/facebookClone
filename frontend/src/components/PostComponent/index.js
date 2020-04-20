import React, { Component } from 'react'
import { Container } from './styles';
import img from './GUILHERME50ANOS.jpeg';
import Comment from '../CommentComponent'
export default class PostComponent extends Component {


  render() {
    const { data } = this.props;
    return (

      <Container>
        <img src={img} alt="sim" />
        <h1>{data.author.name}</h1>
        <time>{data.date}</time>
        <p>{data.content}</p>


        {data.comments ? (
          data.comments.map(comment => < Comment key={comment.id} data={comment} />)
        ) : null}

      </Container>
    )
  }
}