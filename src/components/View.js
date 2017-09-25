import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }
  componentDidMount() {
    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${this.props.match.params.id}`)
    .then(results => results.json())
    .then(data => this.setState({post: data}))
    .catch(err => console.log(err))
  }
  render() {
    let match = this.props.match;
    let post = this.state.post;
    return (
      <div className='card p-4'>
        <Link to={`${match.url}`}><h1 className='display-4'>{post.blogTitle}</h1></Link>
        <p className='lead'>By {post.authorName}</p>
        <p>{post.blogEntry}</p>
      </div>
    );
  }
}
