import React, { Component } from 'react';
import { List } from './styles'
import Post from '../PostComponent'

export default class FeedComponent extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },

    ]
  };


  render() {
    const { posts } = this.state;
    return (
      <List>
        {posts.map(post => <Post key={post.id} data={post} />)}
      </List>

    )
  }
}