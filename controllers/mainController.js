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
};

module.exports = controller;
