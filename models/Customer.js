module.exports = (sequelize, type) => {

    return sequelize.define('customers', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {type : type.STRING(255), required:true, allowNull: false},
        lastname: {type : type.STRING(255), required:true, allowNull: false},
        birthdate: {type: type.DATEONLY, get: function(){return require('moment')(date).format('YYYY-MM-DD');}},
        email: {type : type.STRING, required:true, allowNull: false, validate: {isEmail: true}},
        phone: {type: type.BIGINT, unique: true, allowNull: false,
                validate: {
                    not:{ args: ["[a-z]","i"], msg: "Veillez entrer un numero de telephone valide"},
                    len: {args: [10,20], msg: "La longeur minimale du numero de telephone est 10"}
                }
        },
        city: {type : type.STRING(255), required:false, allowNull: true},
        country: {type : type.STRING(255), required:false, allowNull: true}
    });
};
