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
    .then(data => {
      this.setState({posts: data})
    })
    .catch(err => console.log(err))
  }
  render() {
    let blogFeed = this.state.posts.map(post => {
      return (
        <li key={post._id} className='list-group-item'>
        <Link to={`/view/${post._id}`}>
          <span className='font-weight-bold'>{post.blogTitle}</span>
        </Link> by <span className='font-italic'>{post.authorName}</span></li>
      )
    })
    return (
      <div>
        <h1 className='mb-4'>Blog Feed</h1>
        <ul className='list-group'>
          {blogFeed}
        </ul>
      </div>
    );
  }
}
