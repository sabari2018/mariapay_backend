const Sequelize = require('sequelize');
const UserModel = require('./models/User');
const ServiceModel = require('./models/Service');
const CustomerModel = require('./models/Customer');
const BankModel = require('./models/Bank');
const TypeModel = require('./models/Type');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.BD_HOST,
    dialect: 'postgres',
    logging: false,
});

const User = UserModel(sequelize,Sequelize);
const Service = ServiceModel(sequelize,Sequelize);
const Customer = CustomerModel(sequelize,Sequelize);
const Bank = BankModel(sequelize,Sequelize);
const Type = TypeModel(sequelize,Sequelize);

Service.hasOne(User);
User.belongsTo(Service);

Customer.hasOne(User);
User.belongsTo(Customer);

Customer.hasMany(Bank);
Bank.belongsTo(Customer);

Service.belongsTo(Type);
Type.hasMany(Service);

Bank.belongsTo(Service);
Service.hasOne(Bank);

sequelize.sync({ force: false, alter: true})
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports = {User, Service};
