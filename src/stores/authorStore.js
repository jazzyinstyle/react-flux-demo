"use strict";

const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const _ = require('lodash');
const CHANGE_EVENT = 'change';

let _authors = [];

let AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emitChange(CHANGE_EVENT);
  },

  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {
    return _.find(_authors, {id: id});
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      // AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      //AuthorStore.emitChange();
      break;      
    case ActionTypes.UPDATE_AUTHOR:
      const existingAuthor = _.find(_authors, {id: action.author.id});
      const existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);      
      // AuthorStore.emitChange();
      break; 
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author) {
        return action.id === author.id;
      });
      // AuthorStore.emitChange();
      break;
    default:
      // no op      
  }
});

module.exports = AuthorStore;