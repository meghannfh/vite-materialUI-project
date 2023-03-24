exports.postSignup = (req, res, next) => {
    const user = new User({
        firstName: req.body.userName,
        lastName: req.body.email,
        email: req.body.password,
        password: '',
        age: req.body.age,
        birthdate: req.body.birthdate,
        address: req.body.address,
      });
}