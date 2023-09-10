module.exports = (req, res) => {
  res.render('register', { errors:errors}) ,{
      errors: req.flash('validationErrors')
  }
}