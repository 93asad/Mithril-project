var sort = function (array) {
	var finalArray = [[]];
	//var companyArray = [];
	var close = 0;//+(JSON.parse(JSON.stringify(array[0])).Volume);
	var Cik = "0";//JSON.parse(JSON.stringify(array[0])).ticker.dimEntity.Cik;
	var tempEntry = {};//JSON.parse(JSON.stringify(array[0]));
    var counter = 0;
    var minClose = null;
    var maxClose = null;

	array[0].forEach(function (entry) {
		if (entry.ticker.dimEntity.Cik != Cik) {
			//tempArray.push(entry);
			//vol = 0;

			Cik = entry.ticker.dimEntity.Cik;

			tempEntry = JSON.parse(JSON.stringify(entry));
		}
		else if(tempEntry.DateKey.toString().substring(0,6) == entry.DateKey.toString().substring(0,6)) {
			close += +entry.Close;
			counter++;
            console.log("counter:  "+ entry.DateKey.toString().substring(0,6));
		}
		     else {
		     	tempEntry.Close = close;

		     	if (minClose == null) minClose = close;
		     	else if (minClose > close) minClose = close;


		     	if (maxClose == null) maxClose = close;
		     	else if (maxClose < close) maxClose = close;

		     	finalArray[0].push((JSON.parse(JSON.stringify(tempEntry))));
		     	tempEntry = JSON.parse(JSON.stringify(entry));
		     }
	})
    return {
    	finalArray:finalArray,
    	minClose:minClose,
    	maxClose:maxClose
    };
};

var getYAxis = function(args) {
  return m('line', {x1:args.lines.xscale(args.minDate), y1:args.lines.yscale(args.maxClose), 
                x2:args.lines.xscale(args.minDate), y2:args.lines.yscale(args.minClose),
                style:"stroke:rgb(0,0,0)", "stroke-width":1})
}

var getXAxisLine = function(args) {
  return m('line', {x1:args.lines.xscale(args.minDate), y1:args.lines.yscale(args.minClose), 
                x2:args.lines.xscale(args.maxDate), y2:args.lines.yscale(args.minClose), 
                style:"stroke:rgb(0,0,0)", "stroke-width":1})
}

var  getXAxisValues = function(args) {
  var range = args.maxClose-args.minClose;
  var minClose = args.minClose;
  var firstVal = Math.round((range * 0.25) + minClose);
  var secondVal = Math.round((range * 0.5) + minClose);
  var thirdVal = Math.round((range * 0.75) + minClose);
  var forthVal = Math.round(range + minClose);

  return [firstVal, secondVal, thirdVal, forthVal];
}


var  getXAxis = function(args) {
  var xLine = getXAxisLine({
  	lines: args.lines,
  	minDate: args.minDate,
  	maxDate: args.maxDate,
  	minClose: args.minClose,
  });
  var xValues = getXAxisValues({
  	maxClose: args.maxClose,
  	minClose: args.minClose
  }).map(function(value) {
  var translate = "translate(" + args.lines.xscale(args.minDate) + ", " + args.lines.yscale(value) + ")";

    return m('g', {transform:translate}, 
            [m('circle', {r:3,cx:0, cy:0, 
            stroke:"#FFFFFF", fill:"#000000"})],
            [m('text', {transform:"translate(-52, 5)", "text-anchor":"start"}, value)]);
  });

  return {
    line: xLine,
    values: xValues
  };
}

module.exports = {
	sort: sort,
    yAxis: getYAxis,
    xAxis: getXAxis
};
