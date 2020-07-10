const bcrypt = require('bcrypt');
const {User,Service} = require('../sequelize');

exports.createService = (req, res, next) => {


    const service = new Service({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        description: req.body.description,
        logoUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    console.log(service.dataValues);

    Service.create(service.dataValues)
        .then((service) => {
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    const user = new User({
                        username: req.body.username,
                        password: hash,
                        serviceId: service.id
                    });

                    User.create(user.dataValues)
                        .then(u => res.status(201).json({message: "Creation du Service OK !"}))
                        .catch(error => res.status(400).json({error}));
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
};
