var m = require("mithril");
var User = require("../models/User");

module.exports = {
  view: function() {
    return m(
      "form",
      {
        onsubmit: function(e) {
          e.preventDefault();
          console.log(User.new);
          User.add();
        }
      },
      [
        m("label.label", "First name"),
        m("input.input[type=text][placeholder=First name]", {
          oninput: m.withAttr("value", function(value) {
            User.new.firstName = value;
          }),
          value: User.new.firstName
        }),
        m("label.label", "Last name"),
        m("input.input[type=text][placeholder=Last name]", {
          oninput: m.withAttr("value", function(value) {
            User.new.lastName = value;
          }),
          value: User.new.lastName
        }),
        m("button.button[type=submit]", "Add")
      ]
    );
  }
};
