const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
  try{
      const token = req.headers.authorization.split(' ')[1];
      const decodeToken = jwt.verify(token, process.env.API_KEY);
      const userId = decodeToken.userId;
      if (req.body.userId && req.body.userId !== userId){ throw 'User ID non valable';}
      else {next();}
  }catch (error) {
      res.status(401).json({ error: 'Requete non authentifiee !'})
  }
};
