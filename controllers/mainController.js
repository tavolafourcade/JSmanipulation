/** MAIN CONTROLLER  **/

const controller = {
  index: (req, res) =>{
    res.render('index');
  },
  contact: (req, res) =>{
    res.render('contacto');
  }
};

module.exports = controller;