const Sequelize = require('sequelize');
const initModels = require('../models/init-models');
const sequelize = new Sequelize('Hotel', 'sa', '1', {
    host: 'OKANCAN',
    dialect:  'mssql' 
  });

  const Model = new initModels(sequelize);

  exports.getCityListFunction1 = async function(callback) {

		// var sqlStatement = `
		// SELECT CityID, CityName  FROM Cities Order BY CityID
		// `;			 

        
    try {

             var result = await Model.Cities.findAll(); //select sorgusu 
             var returnVal = [{
                Result:"Success",
                Message:"",
                Cities:result,
            },]
    } catch (err) {
        var returnVal = {
            Result:"Failed",
            Message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
            data:null
        }
    }
	

			callback(null,returnVal);

			
		

};