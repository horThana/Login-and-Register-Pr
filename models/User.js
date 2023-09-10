const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email: { 
      type: String,
      required: [true, 'Please provide email']
    },
    password:{
      type: String,
      required : [true, 'Please provide password']
    }

});

userSchema.pre('save',function(next)
  {
    const user = this

    bcrypt.hash(user.password, 10).then(hash => {
      user.password = hash
      next()
    }).catch(error => {
      console.error(error)
    })

  })

  const User = mongoose.model('User', userSchema)
  module.exports = User