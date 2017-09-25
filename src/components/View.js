import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
    console.log('this.props.match', this.props.match);
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
      <div>
        <Link to={`${match.url}`}><h1>{post.title}</h1></Link>
        <h4>By {post.name}</h4>
        <p>{post.blog}</p>
      </div>
    );
  }
}
