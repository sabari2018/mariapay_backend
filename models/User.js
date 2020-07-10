module.exports = (sequelize, type) =>{
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type : type.STRING(255), required:true, allowNull: false,
            unique:{
                args:true,
                msg: "Ce nom d'utilisateur est deja utiliser !"
            }
        },
        password: { type: type.STRING, required: true, allowNull: false}
    })
};
