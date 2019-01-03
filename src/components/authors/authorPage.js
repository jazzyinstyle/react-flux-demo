"use strict";

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;
const AuthorStore = require('../../stores/authorStore');
const AuthorList = require('./authorList');

const AuthorPage = React.createClass({
    getInitialState: function() {
      return {
        authors: AuthorStore.getAllAuthors()
      }
    },

    componentWillMount: function() {
      AuthorStore.addChangeListener(this._onChange);
    },

    compopnentWillUnmount: function() {
      AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState({authors: AuthorStore.getAllAuthors()});
    },

    render: function() {      
      return (
        <div>
          <h1>Authors</h1>
          <Link to="addAuthor" className="btn btn-default">Add Author</Link>
          <AuthorList 
            authors={this.state.authors} />      
        </div>
      );
    }
});

module.exports = AuthorPage;