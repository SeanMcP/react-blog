import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(results => results.json())
    .then(data => this.setState({posts: data}))
    .catch(err => console.log(err))
  }
  render() {
    let blogFeed = this.state.posts.map(post => {
      return (
        <li key={post._id}><Link to={`/view/${post._id}`}>{post.title}</Link> by {post.name}</li>
      )
    })
    return (
      <div>
        <h1>Blog Feed</h1>
        <ul>
          {blogFeed}
        </ul>
      </div>
    );
  }
}
