
function sort(array) {
	var finalArray = [];
	//var companyArray = [];
	var vol = 0;//+(JSON.parse(JSON.stringify(array[0])).Volume);
	var Cik = "0";//JSON.parse(JSON.stringify(array[0])).ticker.dimEntity.Cik;
	var tempEntry = {};//JSON.parse(JSON.stringify(array[0]));
    var counter = 0;
	array[0].forEach(function (entry) {
		if (entry.ticker.dimEntity.Cik != Cik) {
			//tempArray.push(entry);
			//vol = 0;

			Cik = entry.ticker.dimEntity.Cik;

			tempEntry = JSON.parse(JSON.stringify(entry));
		}
		else if(tempEntry.DateKey.toString().substring(0,6) == entry.DateKey.toString().substring(0,6)) {
			vol += +entry.Volume;
			counter++;
            console.log("counter:  "+ entry.DateKey.toString().substring(0,6));
		}
		     else {
		     	tempEntry.Volume = vol;
		     	finalArray.push([JSON.parse(JSON.stringify(tempEntry))]);
		     	tempEntry = JSON.parse(JSON.stringify(entry));
		     }


	})
    return finalArray;
};

module.exports = sort;

//console.log(sort(array));