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

  404: (req, res) => {
    return res.render("404");
  }
};

module.exports = controller;
