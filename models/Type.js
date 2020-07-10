module.exports = (sequelize, type) => {

    return sequelize.define('types', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {type : type.STRING(255), required:true, allowNull: false},
    });
};
