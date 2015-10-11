var Stock = require('paths-js/stock');
var data = require('../data');
var functions = require('./functions');
var sortedData = functions.sort(data);

var minClose = sortedData.minClose;
var maxClose = sortedData.maxClose;
var minDate = null;
var maxDate = null;

var SinglePoint = {
  view: function(ctrl, args) {
    console.log(args.line);
    var line = args.line;
    var translate = "translate(" + line + ")";
    return m('g', {transform:translate}, 
      [m('circle', {r:3,cx:0, cy:0, 
        stroke:"#FF0000", fill:"#FFFFFF"})]);
  } 
};

var Points = {
  view: function(ctrl, args) {
    var lines = args.lines.curves[0].line.path.points().map(function(line) {
      return m.component(SinglePoint, {
        key: line.id,
        line: line
      })
    });
    return m('svg', {width: 500, height: 500}, 
            [m('g', {transform:"translate(70,30)"}, 
                lines, 
                args.xAxis().values,
                args.xAxis().line,
                args.yAxis()
      )]);
  }};

var HomePage = {
  view: function() {


function date(data) {
  var d = new Date();
  d.setYear(parseInt(data.DateKey.toString().substring(0,4)));
  d.setMonth(parseInt(data.DateKey.toString().substring(4,6))- 1);
  var date = d.getTime();

  if (minDate == null) minDate = date;
  else if (minDate > date) minDate = date;

  if (maxDate == null) maxDate = date;
  else if (maxDate < date) maxDate = date;

  return date;
}



var lines = Stock({
  data: sortedData.finalArray,
  xaccessor: date,
  yaccessor: function(d) { return +d.Close;  },
  width: 450,
  height: 450,
  compute: {
    color: function(i) { return ""; }
  },
  closed: false
});
    return m('div', [
      m.component(Points, {
        lines: lines,
        xAxis: function() { return functions.xAxis({lines: lines, 
                                                      minDate: minDate,
                                                      maxDate: maxDate, 
                                                      minClose: minClose, 
                                                      maxClose: maxClose
        });},
        yAxis: function() { return functions.yAxis({lines: lines, 
                                                      minDate: minDate, 
                                                      minClose: minClose, 
                                                      maxClose: maxClose});}
      })
    ])
  }
}
m.mount(document.body, HomePage);



