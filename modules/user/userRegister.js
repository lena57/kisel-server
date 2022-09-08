import User from './Model';

export const userRegister = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save() //promise
    .then(() => {
      res.status(200).json('user created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('user NOT created');
    });
};
