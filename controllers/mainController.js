const controller = {
  home: (req, res) => {
    return res.render("home");
  },

  about: (req, res) => {
    return res.render("about");
  },

  logIn: (req, res) => {
    return res.render("logIn");
  },

  contact: (req, res) => {
    return res.render("contact");
  },

  carrito: (req, res) => {
    return res.render("carrito");
  },

  register: (req, res) => {
    return res.render("register");
  },

  producDetail: (req, res) => {
    return res.render("producDetail");
  },

  detalle_producto: (req, res) => {
    return res.render("detalle_producto");
  },

  productos: (req, res) => {
    return res.render("productos");
  },

  404: (req, res) => {
    return res.render("404");
  }
};

module.exports = controller;
