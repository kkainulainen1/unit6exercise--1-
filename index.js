var fs = require('fs');
var path = require("path");

var inputFolder = null;

// Checks for '-input' flag
if(process.argv.indexOf("-input") > -1) {
	
    // Determines the index of the '-input' flag
	var argIndex = process.argv.indexOf("-input");
    // Changes the index to read the '-input' parameter
	argIndex = argIndex +1;
	
	// Reads the value of the '-input' parameter
	inputFolder = process.argv[argIndex];
	
	inputFolder = path.join(__dirname, inputFolder);

}

var dirArr = fs.readdirSync(inputFolder);


var objectArr = [{}];

for (var i = 0; i < dirArr.length; i++) {

    var inputFile = inputFolder + "\\" +  dirArr[i]; 
	
    var contents = fs.readFileSync(inputFile, "utf8");
    
    var fileInfo = JSON.parse(contents);
    
    var jsonArr = {
        "id": fileInfo.dataset.id,
		"dataset_code": fileInfo.dataset.dataset_code,
		"database_code": fileInfo.dataset.database_code,
		"name": fileInfo.dataset.name,
		"description": fileInfo.dataset.description,
		"newest_available_date": fileInfo.dataset.newest_available_date,
		"oldest_available_date": fileInfo.dataset.oldest_available_date,
		"column_names": fileInfo.dataset.column_names,
		"frequency": fileInfo.dataset.frequency,
		"type": fileInfo.dataset.type,
		"premium": fileInfo.dataset.premium,
		"limit": fileInfo.dataset.limit,
		"transform": fileInfo.dataset.transform,
		"column_index": fileInfo.dataset.column_index,
		"start_date": fileInfo.dataset.start_date,
		"end_date": fileInfo.dataset.end_date,
		"data": fileInfo.dataset.data
    }
    objectArr[i] = jsonArr;   
}


for (var i = 0; i < objectArr.length; i++) {


    
}



console.log(dirArr);