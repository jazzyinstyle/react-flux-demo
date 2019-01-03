"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const AuthorApi = require('../api/authorApi');
const ActionTypes = require('../constants/actionTypes');

const AuthorActions = {
  createAuthor: function(author) {
    const newAuthor = AuthorApi.saveAuthor(author);

    // Hey dispatcher, go tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },

  updateAuthor: function(author) {
    const updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  },

  deleteAuthor: function(id) {
    AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }
};

module.exports = AuthorActions;