const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const {User} = require('../sequelize');

/*exports.signupClient = (req,res,next) =>{

  bcrypt.hash(req.body.password, 10)
      .then(hash => {
          const user = new User({
              username: req.body.username,
              password: hash,
              customerId: req.body.customerId
          });

          User.create(user.dataValues)
              .then(u => res.status(200).json(u))
              .catch(error => res.status(400).json({error}));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.signupService = (req,res,next) =>{

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                username: req.body.username,
                password: hash,
                serviceId: req.body.serviceId
            });

            User.create(user.dataValues)
                .then(u => res.status(200).json(u))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({ error }));
};*/

exports.login = (req,res,next) => {
    User.findOne({ where: {username: req.body.username}})
        .then(user => {
            if (!user){ return res.stat(401).json({ error: "Utilisateur non trouve !"})}
            bcrypt.compare(req.body.password, user.dataValues.password)
                .then(valid => {
                    if (!valid){ return res.stat(401).json({error: "Mot de passe incorrecte"});}
                    res.status(200).json({
                        userId: user.dataValues.id,
                        token: jwt.sign(
                            {userId: user.dataValues.id},
                            process.env.API_KEY,
                            { expiresIn: '24h'}
                            )
                    });
                }).catch(error => res.status(500).json({ error}));
        }).catch( error => res.status(500).json({error}));
};

exports.createUser = (req,res,next) => {
    console.log("ici dans la methode");
    console.log(req);
};


exports.getAllUser = (req,res) => {
    User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({error}));
};

