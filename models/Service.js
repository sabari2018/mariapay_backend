module.exports = (sequelize, type) => {

    return sequelize.define('services', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {type : type.STRING(255), unique: true, required:true, allowNull: false},
        email: {type : type.STRING, required:true, allowNull: false, validate: {isEmail: true}},
        address: {type : type.STRING, required:true, allowNull: true},
        phone: {type : type.STRING, required:true, allowNull: true},
        description: {type : type.TEXT, required:true, allowNull: true},
        logoUrl: { type: type.STRING, required: true , allowNull: true}
    });
};
