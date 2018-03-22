var m = require("mithril");
var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");
var UserAdd = require("./views/UserAdd");
var UserDelete = require("./views/UserDelete");
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
  "/delete": {
    render: function() {
      return m(Layout, m(UserDelete));
    }
  },
  "/edit/:id": {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs));
    }
  }
});
