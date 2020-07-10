module.exports = (sequelize, type) => {

    return sequelize.define('banks', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {type : type.STRING(255), required:true, allowNull: false},
        email: {type : type.STRING, required:true, allowNull: false, validate: {isEmail: true}}
    });
};
