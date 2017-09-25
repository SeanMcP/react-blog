import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Compose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      blogTitle: '',
      blogEntry: ''
    }
    this.handleName = this.handleName.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleEntry = this.handleEntry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(e) {
    this.setState({authorName: e.target.value});
  }
  handleTitle(e) {
    this.setState({blogTitle: e.target.value});
  }
  handleEntry(e) {
    this.setState({blogEntry: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let newEntry = {
      authorName: this.state.authorName,
      blogTitle: this.state.blogTitle,
      blogEntry: this.state.blogEntry
    }
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: JSON.stringify(newEntry),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => console.log('That is so fetch'))
    .then(data => {
      this.props.history.push('/')
    })
    .catch(err => console.log('Stop trying to make fetch happen: ', err))
  }
  render() {
    return (
      <div>
        <h1>Compose a new blog post</h1>
        <form id='createPost' onSubmit={this.handleSubmit}>
          <label htmlFor='authorName'>Author:</label>
          <input name='authorName' value={this.state.authorName}  onChange={this.handleName} />
          <label htmlFor='blogTitle'>Title:</label>
          <input name='blogTitle' value={this.state.blogTitle}  onChange={this.handleTitle} />
          <label htmlFor='blogEntry'>Entry:</label>
          <textarea name='blogEntry' value={this.state.blogEntry} onChange={this.handleEntry} ></textarea>
          <input type='submit' value='Post'/>
        </form>
      </div>
    );
  }
}
