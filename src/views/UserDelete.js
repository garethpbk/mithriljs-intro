var m = require("mithril");
var User = require("../models/User");

module.exports = {
  view: function() {
    return m(
      "form",
      {
        onsubmit: function(e) {
          e.preventDefault();
          User.delete();
        }
      },
      [
        m("label.label", "id"),
        m("input.input[type=number][placeholder=id", {
          oninput: m.withAttr("value", function(value) {
            User.toDelete.id = value;
          }),
          value: User.toDelete.id
        }),
        m("button.button[type=submit]", "Delete")
      ]
    );
  }
};
