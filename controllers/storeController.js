const User = require('../models/User');

module.exports = (req, res) => {
  let errors = []; // Declare errors variable

  User.create(req.body)
    .then(() => {
      console.log("User registration successful!");
      res.redirect('/');
    })
    .catch((error) => {
      // Handle validation errors
      if (error) {
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
        req.flash('validationErrors', validationErrors);

        return res.redirect('/user/register');
      }
    });
};


      

    
      
  
  // if(error){
      //   const validaiotnErrors = Object.keys(error.errors).map(key => error.errors[key].message)
      //   req.flash('validationErrors', validaiotnErrors)

      //   return res.redirect('/user/register')
