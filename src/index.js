var m = require("mithril");
var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");
var UserAdd = require("./views/UserAdd");
var Layout = require("./views/Layout");

m.route(document.body, "/list", {
  "/list": {
    render: function() {
      return m(Layout, m(UserList));
    }
  },
  "/add": {
    render: function() {
      return m(Layout, m(UserAdd));
    }
  },
  "/edit/:id": {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs));
    }
  }
});
