// src/models/User.js
var m = require("mithril");

var User = {
  list: [],
  loadList: function() {
    return m
      .request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users?limit=100",
        withCredentials: true
      })
      .then(function(result) {
        User.list = result.data;
      });
  },

  current: {},
  new: {},
  toDelete: {},
  load: function(id) {
    return m
      .request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
        withCredentials: true
      })
      .then(function(result) {
        User.current = result;
      });
  },

  save: function() {
    return m.request({
      method: "PUT",
      url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
      data: User.current,
      withCredentials: true
    });
  },

  add: function() {
    m.request({
      method: "POST",
      url: "https://rem-rest-api.herokuapp.com/api/users/",
      data: User.new,
      withCredentials: true
    });
  },

  delete: function() {
    m
      .request({
        method: "DELETE",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + User.toDelete.id,
        data: User.toDelete,
        withCredentials: true
      })
      .then(function() {
        console.log("User " + User.toDelete.id + " deleted!");
      });
  }
};

module.exports = User;
