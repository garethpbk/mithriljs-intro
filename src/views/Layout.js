var m = require("mithril");

module.exports = {
  view: function(vnode) {
    return m("main.layout", [
      m("nav.menu", [
        m("a[href='/list']", { oncreate: m.route.link }, "Users"),
        m("a[href='/add']", { oncreate: m.route.link }, "Add"),
        m("a[href='/delete']", { oncreate: m.route.link }, "Delete")
      ]),
      m("section", vnode.children)
    ]);
  }
};
