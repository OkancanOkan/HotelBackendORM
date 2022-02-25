

// Include MSSQL Driver
var sql = require("mssql");
// Config
const mssqlconfig = require("../../mssqlConfig");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
    console.log('Connected to SQL server successfully!');
}); 


// ...City
exports.getCityListFunction = function(callback) {

	var FUNCTIONNAME = "getCityList";

		var sqlStatement = `
		SELECT CityID, CityName  FROM Cities Order BY CityID
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = {
							Result:"Success",
							Message:"",
							CityTable:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
//Counties
exports.getCountiesListFunction = function(callback) {

	var FUNCTIONNAME = "getCountiesList";

		var sqlStatement = `
		SELECT [CountyID]
      	,[CountyName]
      	,[CityID]
  		FROM [dbo].[Counties]
  		Order By CityID
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = {
							Result:"Success",
							Message:"",
							CountiesTable:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
// Stars
exports.getStarListFunction = function(callback) {

	var FUNCTIONNAME = "getStarList";

		var sqlStatement = `
		SELECT [StarID]
     	 ,[StarName]
 		 FROM [dbo].[Stars]
  
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = {
							Result:"Success",
							Message:"",
							StarTable:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
//RoomType
exports.getRoomTypeListFunction = function(callback) {

	var FUNCTIONNAME = "getRoomTypeList";

		var sqlStatement = `
		SELECT [RoomTypeID]
      ,[RoomTypeName]
  FROM [dbo].[RoomTypes]
  
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = {
							Result:"Success",
							Message:"",
							RoomTypeTable:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
//Customer
exports.getCustomerListFunction = function(callback) {

	var FUNCTIONNAME = "getCustomerList";

		var sqlStatement = `
		Select c.CustomerName,c.CustomerSurname ,c.Phone, c.Address, ci.CityName,CONVERT(varchar , c.CreationDate,103) as CreationDate,Convert(varchar,c.UpdateDate,103) as UpdateDate
		From Customers as c 
		JOIN Cities as ci on ci.CityID=c.CityID
		Order by CustomerID
  
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = {
							Result:"Success",
							Message:"",
							CustomerTable:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
//Hotel
exports.getHotelListFunction = function(callback) {

	var FUNCTIONNAME = "getHotelList";

		var sqlStatement = `
		Select HotelName , s.StarName ,ht.HotelTypeName ,co.CountyName,ci.CityName,CONVERT(varchar , h.CreationDate,103) as CreationDate,CONVERT(varchar,h.UpdateDate,103) as UpdateDate
		FROM Hotels as h 
		JOIN Stars as s on s.StarID =h.StarID
		JOIN HotelTypes AS ht on ht.HotelTypeID=h.HotelTypeID
		JOIN Counties as co on co.CountyID= h.CountyID 
		JOIN Cities as ci on ci.CityID=co.CityID
		ORDER by H.HotelID
  
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = {
							Result:"Success",
							Message:"",
							HotelTable:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};
// Price
exports.getPriceListFunction = function(callback) {

	var FUNCTIONNAME = "getPriceList";

		var sqlStatement = `
		Select p.PriceID , h.HotelName , ht.HotelTypeName,rt.RoomTypeName,s.StarName ,co.CountyName,ci.CityName,p.StartDate,p.EndDate,p.Price
		From Prices as p
		JOIN RoomDetails as rd on rd.RoomDetailID =p.RoomDetailID
		JOIN Hotels as h on h.HotelID =rd.HotelID
		JOIN HotelTypes as ht on ht.HotelTypeID=h.HotelTypeID
		JOIN RoomTypes as rt on rt.RoomTypeID = rd.RoomTypeID
		JOIN Counties as co on co.CountyID=h.CountyID
		JOIN Cities as ci on ci.CityID=co.CityID
		JOIN Stars as s on s.StarID=h.StarID
		Order BY p.Price ASC,h.HotelName,s.StarID DESC


  
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							Result:"Failed",
							Message:"Hata oluştu, lütfen daha sonra tekrar deneyin." +err,
							data:null
						}
					} else {
						var returnVal = {
							Result:"Success",
							Message:"",
							PriceTable:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};


