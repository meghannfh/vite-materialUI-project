const User = require('../models/User');
const jwt = require('jsonwebtoken');

//create a function that we can reuse to generate
//token for us in the login and signup controller

const createToken = ( _id ) => {
  //_id coming from mongo. passed in as payload from redux on clientside

  /*CREATING THE TOKEN*/
  return jwt.sign(
    {_id},
    process.env.SECRET,
    { expiresIn: '3d' }
  );
}