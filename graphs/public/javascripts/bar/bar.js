(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Bar = require('paths-js/bar');
var data = require('../data');
var sortedData = require('./sort')(data);

var SingleBar = {
	view: function(ctrl, args) {
		return m('path', {d:args.bar.line.path.print(), stroke: "no", fill: "#FF0000"});
	} 
};

var Bars = {
	view: function(ctrl, args) {
		var items = args.bars.map(function(bar) {
			return m.component(SingleBar, {
				key: bar.id,
				bar: bar
			})
		})
		return m('svg', {width: 500, height: 500}, [m('g', items)]);
	}};

var HomePage = {
  view: function() {

    var bars = Bar({
  data: sortedData
  ,
  accessor: function(x) { return +x.Volume; },
  compute: {
    color: function(i) { return "#00FF00"; }
  },
  width: 500,
  height: 500,
  gutter: 10
});
    
    return m('div', [
      m.component(Bars, {
        bars: bars.curves
      })
    ])
  }
}

m.mount(document.body, HomePage);

//console.log(data);
},{"../data":3,"./sort":2,"paths-js/bar":4}],2:[function(require,module,exports){

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
},{}],3:[function(require,module,exports){
module.exports =

[
	[ 
		{"DateKey":20150513,"Open":530.56,"High":534.322,"Low":528.655,"Close":529.62,"Volume":"1252300","AdjClose":529.62,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150512,"Open":531.6,"High":533.209,"Low":525.26,"Close":529.04,"Volume":"1625400","AdjClose":529.04,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150511,"Open":538.37,"High":541.98,"Low":535.4,"Close":535.7,"Volume":"881100","AdjClose":535.7,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150508,"Open":536.65,"High":541.15,"Low":525,"Close":538.22,"Volume":"1527600","AdjClose":538.22,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150507,"Open":523.99,"High":533.46,"Low":521.75,"Close":530.7,"Volume":"1537800","AdjClose":530.7,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150506,"Open":531.24,"High":532.38,"Low":521.085,"Close":524.22,"Volume":"1556200","AdjClose":524.22,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150505,"Open":538.21,"High":539.74,"Low":530.391,"Close":530.8,"Volume":"1369100","AdjClose":530.8,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150504,"Open":538.53,"High":544.07,"Low":535.06,"Close":540.78,"Volume":"1303500","AdjClose":540.78,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150501,"Open":538.43,"High":539.54,"Low":532.1,"Close":537.9,"Volume":"1756500","AdjClose":537.9,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150430,"Open":547.87,"High":548.59,"Low":535.05,"Close":537.34,"Volume":"2066200","AdjClose":537.34,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150429,"Open":550.47,"High":553.68,"Low":546.905,"Close":549.08,"Volume":"1692700","AdjClose":549.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150428,"Open":554.64,"High":556.02,"Low":550.366,"Close":553.68,"Volume":"1485500","AdjClose":553.68,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150427,"Open":563.39,"High":565.95,"Low":553.2,"Close":555.37,"Volume":"2387800","AdjClose":555.37,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150424,"Open":566.1,"High":571.14,"Low":557.25,"Close":565.06,"Volume":"4911800","AdjClose":565.06,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150423,"Open":541,"High":550.96,"Low":540.23,"Close":547,"Volume":"3918000","AdjClose":547,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150422,"Open":534.4,"High":541.08,"Low":531.75,"Close":539.365,"Volume":"1576600","AdjClose":539.365,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150421,"Open":537.51,"High":539.39,"Low":533.675,"Close":533.97,"Volume":"1836600","AdjClose":533.97,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150420,"Open":525.6,"High":536.09,"Low":524.5,"Close":535.38,"Volume":"1674700","AdjClose":535.38,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150417,"Open":528.66,"High":529.84,"Low":521.01,"Close":524.05,"Volume":"2138200","AdjClose":524.05,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150416,"Open":529.9,"High":535.59,"Low":529.61,"Close":533.8,"Volume":"1293100","AdjClose":533.8,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150415,"Open":528.7,"High":534.73,"Low":523.22,"Close":532.53,"Volume":"2304000","AdjClose":532.53,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150414,"Open":536.25,"High":537.57,"Low":528.09,"Close":530.39,"Volume":"2590200","AdjClose":530.39,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150413,"Open":538.41,"High":544.06,"Low":537.31,"Close":539.17,"Volume":"1628900","AdjClose":539.17,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150410,"Open":542.29,"High":542.29,"Low":537.31,"Close":540.01,"Volume":"1400800","AdjClose":540.01,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150409,"Open":541.03,"High":541.95,"Low":535.49,"Close":540.78,"Volume":"1549700","AdjClose":540.78,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150408,"Open":538.38,"High":543.85,"Low":538.38,"Close":541.61,"Volume":"1170400","AdjClose":541.61,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150407,"Open":538.08,"High":542.69,"Low":536,"Close":537.02,"Volume":"1298000","AdjClose":537.02,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150406,"Open":532.22,"High":538.41,"Low":529.57,"Close":536.77,"Volume":"1316900","AdjClose":536.77,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150402,"Open":540.85,"High":540.85,"Low":533.85,"Close":535.53,"Volume":"1708400","AdjClose":535.53,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150401,"Open":548.6,"High":551.14,"Low":539.5,"Close":542.56,"Volume":"1947600","AdjClose":542.56,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150331,"Open":550,"High":554.71,"Low":546.72,"Close":548,"Volume":"1576600","AdjClose":548,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150330,"Open":551.62,"High":553.47,"Low":548.17,"Close":552.03,"Volume":"1281400","AdjClose":552.03,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150327,"Open":553,"High":555.28,"Low":548.13,"Close":548.34,"Volume":"1889200","AdjClose":548.34,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150326,"Open":557.59,"High":558.9,"Low":550.65,"Close":555.17,"Volume":"1565300","AdjClose":555.17,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150325,"Open":570.5,"High":572.26,"Low":558.74,"Close":558.78,"Volume":"2110700","AdjClose":558.78,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150324,"Open":562.56,"High":574.59,"Low":561.21,"Close":570.19,"Volume":"2570100","AdjClose":570.19,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150323,"Open":560.43,"High":562.36,"Low":555.83,"Close":558.81,"Volume":"1625600","AdjClose":558.81,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150320,"Open":561.65,"High":561.72,"Low":559.05,"Close":560.36,"Volume":"2585800","AdjClose":560.36,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150319,"Open":559.39,"High":560.8,"Low":556.15,"Close":557.99,"Volume":"1191100","AdjClose":557.99,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150318,"Open":552.5,"High":559.78,"Low":547,"Close":559.5,"Volume":"2124400","AdjClose":559.5,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150317,"Open":551.71,"High":553.8,"Low":548,"Close":550.84,"Volume":"1800600","AdjClose":550.84,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150316,"Open":550.95,"High":556.85,"Low":546,"Close":554.51,"Volume":"1636500","AdjClose":554.51,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150313,"Open":553.5,"High":558.4,"Low":544.22,"Close":547.32,"Volume":"1698900","AdjClose":547.32,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150312,"Open":553.51,"High":556.37,"Low":550.46,"Close":555.51,"Volume":"1385800","AdjClose":555.51,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150311,"Open":555.14,"High":558.14,"Low":550.68,"Close":551.18,"Volume":"1815800","AdjClose":551.18,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150310,"Open":564.25,"High":564.85,"Low":554.73,"Close":555.01,"Volume":"1787400","AdjClose":555.01,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150309,"Open":566.86,"High":570.27,"Low":563.53,"Close":568.85,"Volume":"1059200","AdjClose":568.85,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150306,"Open":574.88,"High":576.68,"Low":566.76,"Close":567.68,"Volume":"1654600","AdjClose":567.68,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150305,"Open":575.02,"High":577.91,"Low":573.41,"Close":575.33,"Volume":"1385800","AdjClose":575.33,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150304,"Open":571.87,"High":577.11,"Low":568.01,"Close":573.37,"Volume":"1871700","AdjClose":573.37,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150303,"Open":570.45,"High":575.39,"Low":566.52,"Close":573.64,"Volume":"1700100","AdjClose":573.64,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150302,"Open":560.53,"High":572.15,"Low":558.75,"Close":571.34,"Volume":"2123800","AdjClose":571.34,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150227,"Open":554.24,"High":564.71,"Low":552.9,"Close":558.4,"Volume":"2403600","AdjClose":558.4,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150226,"Open":543.21,"High":556.14,"Low":541.5,"Close":555.48,"Volume":"2305200","AdjClose":555.48,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150225,"Open":535.9,"High":546.22,"Low":535.45,"Close":543.87,"Volume":"1821000","AdjClose":543.87,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150224,"Open":530,"High":536.79,"Low":528.25,"Close":536.09,"Volume":"1002300","AdjClose":536.09,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150223,"Open":536.05,"High":536.44,"Low":529.41,"Close":531.91,"Volume":"1453900","AdjClose":531.91,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150220,"Open":543.13,"High":543.75,"Low":535.8,"Close":538.95,"Volume":"1440400","AdjClose":538.95,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150219,"Open":538.04,"High":543.11,"Low":538.01,"Close":542.87,"Volume":"986400","AdjClose":542.87,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150218,"Open":541.4,"High":545.49,"Low":537.51,"Close":539.7,"Volume":"1449100","AdjClose":539.7,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150217,"Open":546.83,"High":550,"Low":541.09,"Close":542.84,"Volume":"1612400","AdjClose":542.84,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150213,"Open":543.35,"High":549.91,"Low":543.13,"Close":549.01,"Volume":"1895100","AdjClose":549.01,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150212,"Open":537.25,"High":544.82,"Low":534.67,"Close":542.93,"Volume":"1615800","AdjClose":542.93,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150211,"Open":535.3,"High":538.45,"Low":533.38,"Close":535.97,"Volume":"1374000","AdjClose":535.97,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150210,"Open":529.3,"High":537.7,"Low":526.92,"Close":536.94,"Volume":"1745100","AdjClose":536.94,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150209,"Open":528,"High":532,"Low":526.02,"Close":527.83,"Volume":"1264300","AdjClose":527.83,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150206,"Open":527.64,"High":537.2,"Low":526.41,"Close":531,"Volume":"1744600","AdjClose":531,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150205,"Open":523.79,"High":528.5,"Low":522.09,"Close":527.58,"Volume":"1844700","AdjClose":527.58,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150204,"Open":529.24,"High":532.67,"Low":521.27,"Close":522.76,"Volume":"1659100","AdjClose":522.76,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150203,"Open":528,"High":533.4,"Low":523.26,"Close":529.24,"Volume":"2033100","AdjClose":529.24,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150202,"Open":531.73,"High":533,"Low":518.55,"Close":528.48,"Volume":"2842000","AdjClose":528.48,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150130,"Open":515.86,"High":539.87,"Low":515.52,"Close":534.52,"Volume":"5591000","AdjClose":534.52,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150129,"Open":511,"High":511.09,"Low":501.2,"Close":510.66,"Volume":"4174900","AdjClose":510.66,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150128,"Open":522.78,"High":522.99,"Low":510,"Close":510,"Volume":"1679200","AdjClose":510,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150127,"Open":529.97,"High":530.7,"Low":518.19,"Close":518.63,"Volume":"1898800","AdjClose":518.63,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150126,"Open":538.53,"High":539,"Low":529.67,"Close":535.21,"Volume":"1539500","AdjClose":535.21,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150123,"Open":535.59,"High":542.17,"Low":533,"Close":539.95,"Volume":"2275500","AdjClose":539.95,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150122,"Open":521.48,"High":536.33,"Low":519.7,"Close":534.39,"Volume":"2669600","AdjClose":534.39,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150121,"Open":507.25,"High":519.28,"Low":506.2,"Close":518.04,"Volume":"2262500","AdjClose":518.04,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150120,"Open":511,"High":512.5,"Low":506.02,"Close":506.9,"Volume":"2221800","AdjClose":506.9,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150116,"Open":500.01,"High":508.19,"Low":500,"Close":508.08,"Volume":"2292000","AdjClose":508.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150115,"Open":505.57,"High":505.68,"Low":497.76,"Close":501.79,"Volume":"2708400","AdjClose":501.79,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150114,"Open":494.65,"High":503.23,"Low":493,"Close":500.87,"Volume":"2229600","AdjClose":500.87,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150113,"Open":498.84,"High":502.98,"Low":492.39,"Close":496.18,"Volume":"2364000","AdjClose":496.18,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150112,"Open":494.94,"High":495.98,"Low":487.56,"Close":492.55,"Volume":"2316000","AdjClose":492.55,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150109,"Open":504.76,"High":504.92,"Low":494.79,"Close":496.17,"Volume":"2063700","AdjClose":496.17,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150108,"Open":497.99,"High":503.48,"Low":491,"Close":502.68,"Volume":"3344400","AdjClose":502.68,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150107,"Open":507,"High":507.24,"Low":499.65,"Close":501.1,"Volume":"2059400","AdjClose":501.1,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150106,"Open":515,"High":516.17,"Low":501.05,"Close":501.96,"Volume":"2892000","AdjClose":501.96,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150105,"Open":523.26,"High":524.33,"Low":513.06,"Close":513.87,"Volume":"2054200","AdjClose":513.87,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20150102,"Open":529.01,"High":531.27,"Low":524.1,"Close":524.81,"Volume":"1443600","AdjClose":524.81,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141231,"Open":531.25,"High":532.6,"Low":525.8,"Close":526.4,"Volume":"1364500","AdjClose":526.4,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141230,"Open":528.09,"High":531.15,"Low":527.13,"Close":530.42,"Volume":"873900","AdjClose":530.42,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141229,"Open":532.19,"High":535.48,"Low":530.01,"Close":530.33,"Volume":"2272300","AdjClose":530.33,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141226,"Open":528.77,"High":534.25,"Low":527.31,"Close":534.03,"Volume":"1033200","AdjClose":534.03,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141224,"Open":530.51,"High":531.76,"Low":527.02,"Close":528.77,"Volume":"704000","AdjClose":528.77,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141223,"Open":527,"High":534.56,"Low":526.29,"Close":530.59,"Volume":"2191600","AdjClose":530.59,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141222,"Open":516.08,"High":526.46,"Low":516.08,"Close":524.87,"Volume":"2716300","AdjClose":524.87,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141219,"Open":511.51,"High":517.72,"Low":506.91,"Close":516.35,"Volume":"3680100","AdjClose":516.35,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141218,"Open":512.95,"High":513.87,"Low":504.7,"Close":511.1,"Volume":"2918700","AdjClose":511.1,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141217,"Open":497,"High":507,"Low":496.81,"Close":504.89,"Volume":"2875300","AdjClose":504.89,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141216,"Open":511.56,"High":513.05,"Low":489,"Close":495.39,"Volume":"3953400","AdjClose":495.39,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141215,"Open":522.74,"High":523.1,"Low":513.27,"Close":513.8,"Volume":"2805700","AdjClose":513.8,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141212,"Open":523.51,"High":528.5,"Low":518.66,"Close":518.66,"Volume":"1989100","AdjClose":518.66,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141211,"Open":527.8,"High":533.92,"Low":527.1,"Close":528.34,"Volume":"1606400","AdjClose":528.34,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141210,"Open":533.08,"High":536.33,"Low":525.56,"Close":526.06,"Volume":"1707600","AdjClose":526.06,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141209,"Open":522.14,"High":534.19,"Low":520.5,"Close":533.37,"Volume":"1866200","AdjClose":533.37,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141208,"Open":527.13,"High":531,"Low":523.79,"Close":526.98,"Volume":"2323000","AdjClose":526.98,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141205,"Open":531,"High":532.89,"Low":524.28,"Close":525.26,"Volume":"2558600","AdjClose":525.26,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141204,"Open":531.16,"High":537.34,"Low":528.59,"Close":537.31,"Volume":"1388300","AdjClose":537.31,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141203,"Open":531.44,"High":536,"Low":529.26,"Close":531.32,"Volume":"1274500","AdjClose":531.32,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141202,"Open":533.51,"High":535.5,"Low":529.8,"Close":533.75,"Volume":"1521600","AdjClose":533.75,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141201,"Open":538.9,"High":541.41,"Low":531.86,"Close":533.8,"Volume":"2109600","AdjClose":533.8,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141128,"Open":540.62,"High":542,"Low":536.6,"Close":541.83,"Volume":"1145200","AdjClose":541.83,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141126,"Open":540.88,"High":541.55,"Low":537.04,"Close":540.37,"Volume":"1518800","AdjClose":540.37,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141125,"Open":539,"High":543.98,"Low":538.6,"Close":541.08,"Volume":"1784200","AdjClose":541.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141124,"Open":537.65,"High":542.7,"Low":535.62,"Close":539.27,"Volume":"1701300","AdjClose":539.27,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141121,"Open":541.61,"High":542.14,"Low":536.56,"Close":537.5,"Volume":"2217600","AdjClose":537.5,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141120,"Open":531.25,"High":535.11,"Low":531.08,"Close":534.83,"Volume":"1557700","AdjClose":534.83,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141119,"Open":535,"High":538.24,"Low":530.08,"Close":536.99,"Volume":"1387800","AdjClose":536.99,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141118,"Open":537.5,"High":541.94,"Low":534.17,"Close":535.03,"Volume":"1957300","AdjClose":535.03,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141117,"Open":543.58,"High":543.79,"Low":534.06,"Close":536.51,"Volume":"1721100","AdjClose":536.51,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141114,"Open":546.68,"High":546.68,"Low":542.15,"Close":544.4,"Volume":"1285700","AdjClose":544.4,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141113,"Open":549.8,"High":549.8,"Low":543.48,"Close":545.38,"Volume":"1335700","AdjClose":545.38,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141112,"Open":550.39,"High":550.46,"Low":545.17,"Close":547.31,"Volume":"1126300","AdjClose":547.31,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141111,"Open":548.49,"High":551.94,"Low":546.3,"Close":550.29,"Volume":"962900","AdjClose":550.29,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141110,"Open":541.46,"High":549.59,"Low":541.02,"Close":547.49,"Volume":"1131500","AdjClose":547.49,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141107,"Open":546.21,"High":546.21,"Low":538.67,"Close":541.01,"Volume":"1629300","AdjClose":541.01,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141106,"Open":545.5,"High":546.89,"Low":540.97,"Close":542.04,"Volume":"1329600","AdjClose":542.04,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141105,"Open":556.8,"High":556.8,"Low":544.05,"Close":545.92,"Volume":"2026700","AdjClose":545.92,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141104,"Open":553,"High":555.5,"Low":549.3,"Close":554.11,"Volume":"1240800","AdjClose":554.11,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141103,"Open":555.5,"High":557.9,"Low":553.23,"Close":555.22,"Volume":"1378500","AdjClose":555.22,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141031,"Open":559.35,"High":559.57,"Low":554.75,"Close":559.08,"Volume":"2029500","AdjClose":559.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141030,"Open":548.95,"High":552.8,"Low":543.51,"Close":550.31,"Volume":"1451500","AdjClose":550.31,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141029,"Open":550,"High":554.19,"Low":546.98,"Close":549.33,"Volume":"1765700","AdjClose":549.33,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141028,"Open":543,"High":548.98,"Low":541.62,"Close":548.9,"Volume":"1267500","AdjClose":548.9,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141027,"Open":537.03,"High":544.41,"Low":537.03,"Close":540.77,"Volume":"1182100","AdjClose":540.77,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141024,"Open":544.36,"High":544.88,"Low":535.79,"Close":539.78,"Volume":"1967700","AdjClose":539.78,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141023,"Open":539.32,"High":547.22,"Low":535.85,"Close":543.98,"Volume":"2342400","AdjClose":543.98,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141022,"Open":529.89,"High":539.8,"Low":528.8,"Close":532.71,"Volume":"2911300","AdjClose":532.71,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141021,"Open":525.19,"High":526.79,"Low":519.11,"Close":526.54,"Volume":"2329900","AdjClose":526.54,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141020,"Open":509.45,"High":521.76,"Low":508.1,"Close":520.84,"Volume":"2600400","AdjClose":520.84,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141017,"Open":527.25,"High":530.98,"Low":508.53,"Close":511.17,"Volume":"5524200","AdjClose":511.17,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141016,"Open":519,"High":529.43,"Low":515,"Close":524.51,"Volume":"3698400","AdjClose":524.51,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141015,"Open":531.01,"High":532.8,"Low":518.3,"Close":530.03,"Volume":"3709200","AdjClose":530.03,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141014,"Open":538.9,"High":547.19,"Low":533.17,"Close":537.94,"Volume":"2216500","AdjClose":537.94,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141013,"Open":544.99,"High":549.5,"Low":533.1,"Close":533.21,"Volume":"2574600","AdjClose":533.21,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141010,"Open":557.72,"High":565.13,"Low":544.05,"Close":544.49,"Volume":"3073500","AdjClose":544.49,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141009,"Open":571.18,"High":571.49,"Low":559.06,"Close":560.88,"Volume":"2517900","AdjClose":560.88,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141008,"Open":565.57,"High":573.88,"Low":557.49,"Close":572.5,"Volume":"1985400","AdjClose":572.5,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141007,"Open":574.4,"High":575.27,"Low":563.74,"Close":563.74,"Volume":"1906100","AdjClose":563.74,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141006,"Open":578.8,"High":581,"Low":574.44,"Close":577.35,"Volume":"1211300","AdjClose":577.35,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141003,"Open":573.05,"High":577.22,"Low":572.5,"Close":575.28,"Volume":"1138600","AdjClose":575.28,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141002,"Open":567.31,"High":571.91,"Low":563.32,"Close":570.08,"Volume":"1175200","AdjClose":570.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20141001,"Open":576.01,"High":577.58,"Low":567.01,"Close":568.27,"Volume":"1441500","AdjClose":568.27,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140930,"Open":576.93,"High":579.85,"Low":572.85,"Close":577.36,"Volume":"1617300","AdjClose":577.36,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140929,"Open":571.75,"High":578.19,"Low":571.17,"Close":576.36,"Volume":"1278900","AdjClose":576.36,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140926,"Open":576.06,"High":579.25,"Low":574.66,"Close":577.1,"Volume":"1439700","AdjClose":577.1,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140925,"Open":587.55,"High":587.98,"Low":574.18,"Close":575.06,"Volume":"1920700","AdjClose":575.06,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140924,"Open":581.46,"High":589.63,"Low":580.52,"Close":587.99,"Volume":"1723400","AdjClose":587.99,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140923,"Open":586.85,"High":586.85,"Low":581,"Close":581.13,"Volume":"1467400","AdjClose":581.13,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140922,"Open":593.82,"High":593.95,"Low":583.46,"Close":587.37,"Volume":"1684900","AdjClose":587.37,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140919,"Open":591.5,"High":596.48,"Low":589.5,"Close":596.08,"Volume":"3726400","AdjClose":596.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140918,"Open":587,"High":589.54,"Low":585,"Close":589.27,"Volume":"1440600","AdjClose":589.27,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140917,"Open":580.01,"High":587.52,"Low":578.78,"Close":584.77,"Volume":"1688200","AdjClose":584.77,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140916,"Open":572.76,"High":581.5,"Low":572.66,"Close":579.95,"Volume":"1476300","AdjClose":579.95,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140915,"Open":572.94,"High":574.95,"Low":568.21,"Close":573.1,"Volume":"1593200","AdjClose":573.1,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140912,"Open":581,"High":581.64,"Low":574.46,"Close":575.62,"Volume":"1597300","AdjClose":575.62,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140911,"Open":580.36,"High":581.81,"Low":576.26,"Close":581.35,"Volume":"1217700","AdjClose":581.35,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140910,"Open":581.5,"High":583.5,"Low":576.94,"Close":583.1,"Volume":"974700","AdjClose":583.1,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140909,"Open":588.9,"High":589,"Low":580,"Close":581.01,"Volume":"1283700","AdjClose":581.01,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140908,"Open":586.6,"High":591.77,"Low":586.3,"Close":589.72,"Volume":"1427100","AdjClose":589.72,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140905,"Open":583.98,"High":586.55,"Low":581.95,"Close":586.08,"Volume":"1627900","AdjClose":586.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140904,"Open":580,"High":586,"Low":579.22,"Close":581.98,"Volume":"1454200","AdjClose":581.98,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140903,"Open":580,"High":582.99,"Low":575,"Close":577.94,"Volume":"1211800","AdjClose":577.94,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140902,"Open":571.85,"High":577.83,"Low":571.19,"Close":577.33,"Volume":"1574100","AdjClose":577.33,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140829,"Open":571.33,"High":572.04,"Low":567.07,"Close":571.6,"Volume":"1080800","AdjClose":571.6,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140828,"Open":569.56,"High":573.25,"Low":567.1,"Close":569.2,"Volume":"1289400","AdjClose":569.2,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140827,"Open":577.27,"High":578.49,"Low":570.1,"Close":571,"Volume":"1698700","AdjClose":571,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140826,"Open":581.26,"High":581.8,"Low":576.58,"Close":577.86,"Volume":"1635200","AdjClose":577.86,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140825,"Open":584.72,"High":585,"Low":579,"Close":580.2,"Volume":"1357700","AdjClose":580.2,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140822,"Open":583.59,"High":585.24,"Low":580.64,"Close":582.56,"Volume":"786900","AdjClose":582.56,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140821,"Open":583.82,"High":584.5,"Low":581.14,"Close":583.37,"Volume":"912300","AdjClose":583.37,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140820,"Open":585.88,"High":586.7,"Low":582.57,"Close":584.49,"Volume":"1033900","AdjClose":584.49,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140819,"Open":585,"High":587.34,"Low":584,"Close":586.86,"Volume":"976000","AdjClose":586.86,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140818,"Open":576.11,"High":584.51,"Low":576,"Close":582.16,"Volume":"1280600","AdjClose":582.16,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140815,"Open":577.86,"High":579.38,"Low":570.52,"Close":573.48,"Volume":"1515000","AdjClose":573.48,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140814,"Open":576.18,"High":577.9,"Low":570.88,"Close":574.65,"Volume":"982800","AdjClose":574.65,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140813,"Open":567.31,"High":575,"Low":565.75,"Close":574.78,"Volume":"1437900","AdjClose":574.78,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140812,"Open":564.52,"High":565.9,"Low":560.88,"Close":562.73,"Volume":"1537800","AdjClose":562.73,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140811,"Open":569.99,"High":570.49,"Low":566,"Close":567.88,"Volume":"1211400","AdjClose":567.88,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140808,"Open":563.56,"High":570.25,"Low":560.35,"Close":568.77,"Volume":"1490700","AdjClose":568.77,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140807,"Open":568,"High":569.89,"Low":561.1,"Close":563.36,"Volume":"1107900","AdjClose":563.36,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140806,"Open":561.78,"High":570.7,"Low":560,"Close":566.37,"Volume":"1330700","AdjClose":566.37,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140805,"Open":570.05,"High":571.98,"Low":562.61,"Close":565.07,"Volume":"1547000","AdjClose":565.07,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140804,"Open":569.04,"High":575.35,"Low":564.1,"Close":573.15,"Volume":"1423400","AdjClose":573.15,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140801,"Open":570.4,"High":575.96,"Low":562.85,"Close":566.07,"Volume":"1949900","AdjClose":566.07,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140731,"Open":580.6,"High":583.65,"Low":570,"Close":571.6,"Volume":"2097000","AdjClose":571.6,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140730,"Open":586.55,"High":589.5,"Low":584,"Close":587.42,"Volume":"1013700","AdjClose":587.42,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140729,"Open":588.75,"High":589.7,"Low":583.52,"Close":585.61,"Volume":"1346200","AdjClose":585.61,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140728,"Open":588.07,"High":592.5,"Low":584.75,"Close":590.6,"Volume":"984100","AdjClose":590.6,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140725,"Open":590.4,"High":591.86,"Low":587.03,"Close":589.02,"Volume":"929900","AdjClose":589.02,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140724,"Open":596.45,"High":599.5,"Low":591.77,"Close":593.35,"Volume":"1032300","AdjClose":593.35,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140723,"Open":593.23,"High":597.85,"Low":592.5,"Close":595.98,"Volume":"1229800","AdjClose":595.98,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140722,"Open":590.72,"High":599.65,"Low":590.6,"Close":594.74,"Volume":"1694500","AdjClose":594.74,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140721,"Open":591.75,"High":594.4,"Low":585.23,"Close":589.47,"Volume":"2056500","AdjClose":589.47,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140718,"Open":593,"High":596.8,"Low":582,"Close":595.08,"Volume":"4003200","AdjClose":595.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140717,"Open":579.53,"High":580.99,"Low":568.61,"Close":573.73,"Volume":"3008300","AdjClose":573.73,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140716,"Open":588,"High":588.4,"Low":582.2,"Close":582.66,"Volume":"1393300","AdjClose":582.66,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140715,"Open":585.74,"High":585.8,"Low":576.56,"Close":584.78,"Volume":"1618600","AdjClose":584.78,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140714,"Open":582.6,"High":585.21,"Low":578.03,"Close":584.87,"Volume":"1849000","AdjClose":584.87,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140711,"Open":571.91,"High":580.85,"Low":571.42,"Close":579.18,"Volume":"1617300","AdjClose":579.18,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140710,"Open":565.91,"High":576.59,"Low":565.01,"Close":571.1,"Volume":"1353000","AdjClose":571.1,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140709,"Open":571.58,"High":576.72,"Low":569.38,"Close":576.08,"Volume":"1113700","AdjClose":576.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140708,"Open":577.66,"High":579.53,"Low":566.14,"Close":571.09,"Volume":"1904300","AdjClose":571.09,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140707,"Open":583.76,"High":586.43,"Low":579.59,"Close":582.25,"Volume":"1061700","AdjClose":582.25,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140703,"Open":583.35,"High":585.01,"Low":580.92,"Close":584.73,"Volume":"712200","AdjClose":584.73,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140702,"Open":583.35,"High":585.44,"Low":580.39,"Close":582.34,"Volume":"1053500","AdjClose":582.34,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140701,"Open":578.32,"High":584.4,"Low":576.65,"Close":582.67,"Volume":"1444000","AdjClose":582.67,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140630,"Open":578.66,"High":579.57,"Low":574.75,"Close":575.28,"Volume":"1310200","AdjClose":575.28,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140627,"Open":577.18,"High":579.87,"Low":573.8,"Close":577.24,"Volume":"2230800","AdjClose":577.24,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140626,"Open":581,"High":582.45,"Low":571.85,"Close":576,"Volume":"1737200","AdjClose":576,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140625,"Open":565.26,"High":579.96,"Low":565.22,"Close":578.65,"Volume":"1964000","AdjClose":578.65,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140624,"Open":565.19,"High":572.65,"Low":561.01,"Close":564.62,"Volume":"2201100","AdjClose":564.62,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140623,"Open":555.15,"High":565,"Low":554.25,"Close":564.95,"Volume":"1532600","AdjClose":564.95,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140620,"Open":556.85,"High":557.58,"Low":550.39,"Close":556.36,"Volume":"4496000","AdjClose":556.36,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140619,"Open":554.24,"High":555,"Low":548.51,"Close":554.9,"Volume":"2450100","AdjClose":554.9,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140618,"Open":544.86,"High":553.56,"Low":544,"Close":553.37,"Volume":"1737000","AdjClose":553.37,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140617,"Open":544.2,"High":545.32,"Low":539.33,"Close":543.01,"Volume":"1440600","AdjClose":543.01,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140616,"Open":549.26,"High":549.62,"Low":541.52,"Close":544.28,"Volume":"1697900","AdjClose":544.28,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140613,"Open":552.26,"High":552.3,"Low":545.56,"Close":551.76,"Volume":"1217200","AdjClose":551.76,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140612,"Open":557.3,"High":557.99,"Low":548.46,"Close":551.35,"Volume":"1454500","AdjClose":551.35,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140611,"Open":558,"High":559.88,"Low":555.02,"Close":558.84,"Volume":"1097100","AdjClose":558.84,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140610,"Open":560.51,"High":563.6,"Low":557.9,"Close":560.55,"Volume":"1348000","AdjClose":560.55,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140609,"Open":557.15,"High":562.9,"Low":556.04,"Close":562.12,"Volume":"1463500","AdjClose":562.12,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140606,"Open":558.06,"High":558.06,"Low":548.93,"Close":556.33,"Volume":"1732000","AdjClose":556.33,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140605,"Open":546.4,"High":554.95,"Low":544.45,"Close":553.9,"Volume":"1684500","AdjClose":553.9,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140604,"Open":541.5,"High":548.61,"Low":538.75,"Close":544.66,"Volume":"1811500","AdjClose":544.66,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140603,"Open":550.99,"High":552.34,"Low":542.55,"Close":544.94,"Volume":"1861500","AdjClose":544.94,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140602,"Open":560.7,"High":560.9,"Low":545.73,"Close":553.93,"Volume":"1431100","AdjClose":553.93,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140530,"Open":560.8,"High":561.35,"Low":555.91,"Close":559.89,"Volume":"1766300","AdjClose":559.89,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140529,"Open":563.35,"High":564,"Low":558.71,"Close":560.08,"Volume":"1350400","AdjClose":560.08,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140528,"Open":564.57,"High":567.84,"Low":561,"Close":561.68,"Volume":"1647500","AdjClose":561.68,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140527,"Open":556,"High":566,"Low":554.35,"Close":565.95,"Volume":"2098400","AdjClose":565.95,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140523,"Open":547.26,"High":553.64,"Low":543.7,"Close":552.7,"Volume":"1926900","AdjClose":552.7,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140522,"Open":541.13,"High":547.6,"Low":540.78,"Close":545.06,"Volume":"1611400","AdjClose":545.06,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140521,"Open":532.9,"High":539.18,"Low":531.91,"Close":538.94,"Volume":"1193000","AdjClose":538.94,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140520,"Open":529.74,"High":536.23,"Low":526.3,"Close":529.77,"Volume":"1779900","AdjClose":529.77,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140519,"Open":519.7,"High":529.78,"Low":517.58,"Close":528.86,"Volume":"1274300","AdjClose":528.86,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140516,"Open":521.39,"High":521.8,"Low":515.44,"Close":520.63,"Volume":"1481200","AdjClose":520.63,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140515,"Open":525.7,"High":525.87,"Low":517.42,"Close":519.98,"Volume":"1699700","AdjClose":519.98,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140514,"Open":533,"High":533,"Low":525.29,"Close":526.65,"Volume":"1188500","AdjClose":526.65,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140513,"Open":530.89,"High":536.07,"Low":529.51,"Close":533.09,"Volume":"1648900","AdjClose":533.09,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140512,"Open":523.51,"High":530.19,"Low":519.01,"Close":529.92,"Volume":"1907300","AdjClose":529.92,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140509,"Open":510.75,"High":519.9,"Low":504.2,"Close":518.73,"Volume":"2432800","AdjClose":518.73,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140508,"Open":508.46,"High":517.23,"Low":506.45,"Close":511,"Volume":"2015800","AdjClose":511,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140507,"Open":515.79,"High":516.68,"Low":503.3,"Close":509.96,"Volume":"3215500","AdjClose":509.96,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140506,"Open":525.23,"High":526.81,"Low":515.06,"Close":515.14,"Volume":"1684400","AdjClose":515.14,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140505,"Open":524.82,"High":528.9,"Low":521.32,"Close":527.81,"Volume":"1021300","AdjClose":527.81,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140502,"Open":533.76,"High":534,"Low":525.61,"Close":527.93,"Volume":"1683900","AdjClose":527.93,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140501,"Open":527.11,"High":532.93,"Low":523.88,"Close":531.35,"Volume":"1900300","AdjClose":531.35,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140430,"Open":527.6,"High":528,"Low":522.52,"Close":526.66,"Volume":"1746400","AdjClose":526.66,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140429,"Open":516.9,"High":529.46,"Low":516.32,"Close":527.7,"Volume":"2691700","AdjClose":527.7,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140428,"Open":517.18,"High":518.6,"Low":502.8,"Close":517.15,"Volume":"3326400","AdjClose":517.15,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140425,"Open":522.51,"High":524.7,"Low":515.42,"Close":516.18,"Volume":"2094600","AdjClose":516.18,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140424,"Open":530.07,"High":531.65,"Low":522.12,"Close":525.16,"Volume":"1878000","AdjClose":525.16,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140423,"Open":533.79,"High":533.87,"Low":526.25,"Close":526.94,"Volume":"2046700","AdjClose":526.94,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140422,"Open":528.64,"High":537.23,"Low":527.51,"Close":534.81,"Volume":"2358900","AdjClose":534.81,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140421,"Open":536.1,"High":536.7,"Low":525.6,"Close":528.62,"Volume":"2559700","AdjClose":528.62,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140417,"Open":548.81,"High":549.5,"Low":531.15,"Close":536.1,"Volume":"6790900","AdjClose":536.1,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140416,"Open":543,"High":557,"Low":540,"Close":556.54,"Volume":"4879900","AdjClose":556.54,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140415,"Open":536.82,"High":538.45,"Low":518.46,"Close":536.44,"Volume":"3844500","AdjClose":536.44,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140414,"Open":538.25,"High":544.1,"Low":529.56,"Close":532.52,"Volume":"2568000","AdjClose":532.52,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140411,"Open":532.55,"High":540,"Low":526.53,"Close":530.6,"Volume":"3914100","AdjClose":530.6,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140410,"Open":565,"High":565,"Low":539.9,"Close":540.95,"Volume":"4025800","AdjClose":540.95,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140409,"Open":559.62,"High":565.37,"Low":552.95,"Close":564.14,"Volume":"3321700","AdjClose":564.14,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140408,"Open":542.6,"High":555,"Low":541.61,"Close":554.9,"Volume":"3142600","AdjClose":554.9,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140407,"Open":540.74,"High":548.48,"Low":527.15,"Close":538.15,"Volume":"4389600","AdjClose":538.15,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140404,"Open":574.65,"High":577.77,"Low":543,"Close":543.14,"Volume":"6351900","AdjClose":543.14,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140403,"Open":569.85,"High":587.28,"Low":564.13,"Close":569.74,"Volume":"5085200","AdjClose":569.74,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140402,"Open":599.99,"High":604.83,"Low":562.19,"Close":567,"Volume":"146700","AdjClose":567,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140401,"Open":558.71,"High":568.45,"Low":558.71,"Close":567.16,"Volume":"7900","AdjClose":567.16,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140331,"Open":566.89,"High":567,"Low":556.93,"Close":556.97,"Volume":"10800","AdjClose":556.97,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140328,"Open":561.2,"High":566.43,"Low":558.67,"Close":559.99,"Volume":"41100","AdjClose":559.99,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}},{"DateKey":20140327,"Open":568,"High":568,"Low":552.92,"Close":558.46,"Volume":"13100","AdjClose":558.46,"ticker":{"Ticker":"GOOG","dimEntity":{"Cik":1288776,"Name":"GOOGLE INC.","hasXBRL":true}}}
	]
];

},{}],4:[function(require,module,exports){
// Generated by uRequire v0.7.0-beta.15 target: 'dist' template: 'nodejs'
(function () {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;

var O = require('./ops'),
    Linear = require('./linear'),
    Rectangle = require('./rectangle');

module.exports = (function () {
  return function (arg) {
    var accessor, bottom, compute, curves, d, data, el, g, group_width, groups, gutter, height, i, j, k, l, left, len, len1, len2, len3, line, m, max, min, n, o, right, scale, shift, top, val, w, width;
    data = arg.data, accessor = arg.accessor, width = arg.width, height = arg.height, gutter = arg.gutter, compute = arg.compute;
    if (accessor == null) {
      accessor = function (x) {
        return x;
      };
    }
    if (gutter == null) {
      gutter = 0;
    }
    groups = [];
    min = 0;
    max = 0;
    for (i = k = 0, len = data.length; k < len; i = ++k) {
      d = data[i];
      for (j = l = 0, len1 = d.length; l < len1; j = ++l) {
        el = d[j];
        val = accessor(el);
        if (val < min) {
          min = val;
        }
        if (val > max) {
          max = val;
        }
        if (groups[j] == null) {
          groups[j] = [];
        }
        groups[j][i] = val;
      }
    }
    n = groups.length;
    group_width = (width - gutter * (n - 1)) / n;
    curves = [];
    scale = Linear([
      min,
      max
    ], [
      height,
      0
    ]);
    for (i = m = 0, len2 = groups.length; m < len2; i = ++m) {
      g = groups[i];
      w = group_width / g.length;
      shift = (group_width + gutter) * i;
      for (j = o = 0, len3 = g.length; o < len3; j = ++o) {
        el = g[j];
        left = shift + w * j;
        right = left + w;
        bottom = scale(0);
        top = scale(el);
        line = Rectangle({
          left: left,
          right: right,
          bottom: bottom,
          top: top
        });
        curves.push(O.enhance(compute, {
          item: data[j][i],
          line: line,
          index: j
        }));
      }
    }
    return {
      curves: curves,
      scale: scale
    };
  };
}).call(this);


}).call(this)
},{"./linear":5,"./ops":6,"./rectangle":9}],5:[function(require,module,exports){
// Generated by uRequire v0.7.0-beta.15 target: 'dist' template: 'nodejs'
(function () {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;


module.exports = (function () {
  var linear;
  linear = function (arg, arg1) {
    var a, b, c, d, f;
    a = arg[0], b = arg[1];
    c = arg1[0], d = arg1[1];
    f = function (x) {
      return c + (d - c) * (x - a) / (b - a);
    };
    f.inverse = function () {
      return linear([
        c,
        d
      ], [
        a,
        b
      ]);
    };
    return f;
  };
  return linear;
}).call(this);


}).call(this)
},{}],6:[function(require,module,exports){
// Generated by uRequire v0.7.0-beta.15 target: 'dist' template: 'nodejs'
(function () {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;


module.exports = (function () {
  var average, enhance, length, max, min, minus, on_circle, plus, sum, sum_vectors, times;
  sum = function (xs) {
    return xs.reduce(function (a, b) {
      return a + b;
    }, 0);
  };
  min = function (xs) {
    return xs.reduce(function (a, b) {
      return Math.min(a, b);
    });
  };
  max = function (xs) {
    return xs.reduce(function (a, b) {
      return Math.max(a, b);
    });
  };
  plus = function (arg, arg1) {
    var a, b, c, d;
    a = arg[0], b = arg[1];
    c = arg1[0], d = arg1[1];
    return [
      a + c,
      b + d
    ];
  };
  minus = function (arg, arg1) {
    var a, b, c, d;
    a = arg[0], b = arg[1];
    c = arg1[0], d = arg1[1];
    return [
      a - c,
      b - d
    ];
  };
  times = function (k, arg) {
    var a, b;
    a = arg[0], b = arg[1];
    return [
      k * a,
      k * b
    ];
  };
  length = function (arg) {
    var a, b;
    a = arg[0], b = arg[1];
    return Math.sqrt(a * a + b * b);
  };
  sum_vectors = function (xs) {
    return xs.reduce(function (v, w) {
      return plus(v, w);
    }, [
      0,
      0
    ]);
  };
  average = function (points) {
    return times(1 / points.length, points.reduce(plus));
  };
  on_circle = function (r, angle) {
    return times(r, [
      Math.sin(angle),
      -Math.cos(angle)
    ]);
  };
  enhance = function (compute, curve) {
    var key, method, ref;
    ref = compute || {};
    for (key in ref) {
      method = ref[key];
      curve[key] = method(curve.index, curve.item, curve.group);
    }
    return curve;
  };
  return {
    sum: sum,
    min: min,
    max: max,
    plus: plus,
    minus: minus,
    times: times,
    length: length,
    sum_vectors: sum_vectors,
    average: average,
    on_circle: on_circle,
    enhance: enhance
  };
}).call(this);


}).call(this)
},{}],7:[function(require,module,exports){
// Generated by uRequire v0.7.0-beta.15 target: 'dist' template: 'nodejs'
(function () {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;


module.exports = (function () {
  var Path;
  Path = function (init) {
    var areEqualPoints, instructions, plus, point, printInstrunction, push, round, trimZeros, verbosify;
    instructions = init || [];
    push = function (arr, el) {
      var copy;
      copy = arr.slice(0, arr.length);
      copy.push(el);
      return copy;
    };
    areEqualPoints = function (p1, p2) {
      return p1[0] === p2[0] && p1[1] === p2[1];
    };
    trimZeros = function (string, char) {
      var l;
      l = string.length;
      while (string.charAt(l - 1) === "0") {
        l -= 1;
      }
      if (string.charAt(l - 1) === ".") {
        l -= 1;
      }
      return string.substr(0, l);
    };
    round = function (number, digits) {
      var str;
      str = number.toFixed(digits);
      return trimZeros(str);
    };
    printInstrunction = function (arg) {
      var command, numbers, param, params;
      command = arg.command, params = arg.params;
      numbers = function () {
        var i, len, results;
        results = [];
        for (i = 0, len = params.length; i < len; i++) {
          param = params[i];
          results.push(round(param, 6));
        }
        return results;
      }();
      return command + " " + numbers.join(" ");
    };
    point = function (arg, arg1) {
      var command, params, prev_x, prev_y;
      command = arg.command, params = arg.params;
      prev_x = arg1[0], prev_y = arg1[1];
      switch (command) {
      case "M":
        return [
          params[0],
          params[1]
        ];
      case "L":
        return [
          params[0],
          params[1]
        ];
      case "H":
        return [
          params[0],
          prev_y
        ];
      case "V":
        return [
          prev_x,
          params[0]
        ];
      case "Z":
        return null;
      case "C":
        return [
          params[4],
          params[5]
        ];
      case "S":
        return [
          params[2],
          params[3]
        ];
      case "Q":
        return [
          params[2],
          params[3]
        ];
      case "T":
        return [
          params[0],
          params[1]
        ];
      case "A":
        return [
          params[5],
          params[6]
        ];
      }
    };
    verbosify = function (keys, f) {
      return function (a) {
        var args;
        args = typeof a === "object" ? keys.map(function (k) {
          return a[k];
        }) : arguments;
        return f.apply(null, args);
      };
    };
    plus = function (instruction) {
      return Path(push(instructions, instruction));
    };
    return {
      moveto: verbosify([
        "x",
        "y"
      ], function (x, y) {
        return plus({
          command: "M",
          params: [
            x,
            y
          ]
        });
      }),
      lineto: verbosify([
        "x",
        "y"
      ], function (x, y) {
        return plus({
          command: "L",
          params: [
            x,
            y
          ]
        });
      }),
      hlineto: verbosify(["x"], function (x) {
        return plus({
          command: "H",
          params: [x]
        });
      }),
      vlineto: verbosify(["y"], function (y) {
        return plus({
          command: "V",
          params: [y]
        });
      }),
      closepath: function () {
        return plus({
          command: "Z",
          params: []
        });
      },
      curveto: verbosify([
        "x1",
        "y1",
        "x2",
        "y2",
        "x",
        "y"
      ], function (x1, y1, x2, y2, x, y) {
        return plus({
          command: "C",
          params: [
            x1,
            y1,
            x2,
            y2,
            x,
            y
          ]
        });
      }),
      smoothcurveto: verbosify([
        "x2",
        "y2",
        "x",
        "y"
      ], function (x2, y2, x, y) {
        return plus({
          command: "S",
          params: [
            x2,
            y2,
            x,
            y
          ]
        });
      }),
      qcurveto: verbosify([
        "x1",
        "y1",
        "x",
        "y"
      ], function (x1, y1, x, y) {
        return plus({
          command: "Q",
          params: [
            x1,
            y1,
            x,
            y
          ]
        });
      }),
      smoothqcurveto: verbosify([
        "x",
        "y"
      ], function (x, y) {
        return plus({
          command: "T",
          params: [
            x,
            y
          ]
        });
      }),
      arc: verbosify([
        "rx",
        "ry",
        "xrot",
        "large_arc_flag",
        "sweep_flag",
        "x",
        "y"
      ], function (rx, ry, xrot, large_arc_flag, sweep_flag, x, y) {
        return plus({
          command: "A",
          params: [
            rx,
            ry,
            xrot,
            large_arc_flag,
            sweep_flag,
            x,
            y
          ]
        });
      }),
      print: function () {
        return instructions.map(printInstrunction).join(" ");
      },
      points: function () {
        var fn, i, instruction, len, prev, ps;
        ps = [];
        prev = [
          0,
          0
        ];
        fn = function () {
          var p;
          p = point(instruction, prev);
          prev = p;
          if (p) {
            return ps.push(p);
          }
        };
        for (i = 0, len = instructions.length; i < len; i++) {
          instruction = instructions[i];
          fn();
        }
        return ps;
      },
      instructions: function () {
        return instructions.slice(0, instructions.length);
      },
      connect: function (path) {
        var first, last, newInstructions;
        last = this.points().slice(-1)[0];
        first = path.points()[0];
        newInstructions = path.instructions().slice(1);
        if (!areEqualPoints(last, first)) {
          newInstructions.unshift({
            command: "L",
            params: first
          });
        }
        return Path(this.instructions().concat(newInstructions));
      }
    };
  };
  return function () {
    return Path();
  };
}).call(this);


}).call(this)
},{}],8:[function(require,module,exports){
// Generated by uRequire v0.7.0-beta.15 target: 'dist' template: 'nodejs'
(function () {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;

var Path = require('./path'),
    O = require('./ops');

module.exports = (function () {
  return function (arg) {
    var closed, head, l, path, points, ref, tail;
    points = arg.points, closed = arg.closed;
    l = points.length;
    head = points[0];
    tail = points.slice(1, +l + 1 || 9000000000);
    path = tail.reduce(function (pt, p) {
      return pt.lineto.apply(pt, p);
    }, (ref = Path()).moveto.apply(ref, head));
    return {
      path: closed ? path.closepath() : path,
      centroid: O.average(points)
    };
  };
}).call(this);


}).call(this)
},{"./ops":6,"./path":7}],9:[function(require,module,exports){
// Generated by uRequire v0.7.0-beta.15 target: 'dist' template: 'nodejs'
(function () {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;

var Polygon = require('./polygon');

module.exports = (function () {
  return function (arg) {
    var bottom, left, right, top;
    left = arg.left, right = arg.right, top = arg.top, bottom = arg.bottom;
    return Polygon({
      points: [
        [
          right,
          top
        ],
        [
          right,
          bottom
        ],
        [
          left,
          bottom
        ],
        [
          left,
          top
        ]
      ],
      closed: true
    });
  };
}).call(this);


}).call(this)
},{"./polygon":8}]},{},[1]);
