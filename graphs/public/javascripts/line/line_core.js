var Stock = require('paths-js/stock');
var data = require('../data');
var sortedData = require('./sort')(data);

var SingleLine = {
  view: function(ctrl, args) {
    return m('path', {d:args.line.line.path.print(), stroke: "#FF0000", fill: "#FFFFFF"});
  } 
};

var Lines = {
  view: function(ctrl, args) {
    var lines = args.lines.map(function(line) {
      return m.component(SingleLine, {
        key: line.id,
        line: line
      })
    })
    return m('svg', {width: 500, height: 500}, [m('g', lines)]);
  }};

var HomePage = {
  view: function() {


function date(data) {
  var d = new Date();
  d.setYear(parseInt(data.DateKey.toString().substring(0,4)));
  d.setMonth(parseInt(data.DateKey.toString().substring(4,6))- 1);
  return d.getTime();
}

var lines = Stock({
  data: sortedData,
  xaccessor: date,
  yaccessor: function(d) { return +d.Close;  },
  width: 500,
  height: 500,
  compute: {
    color: function(i) { return ""; }
  },
  closed: false
});
    
    return m('div', [
      m.component(Lines, {
        lines: lines.curves
      })
    ])
  }
}

m.mount(document.body, HomePage);

//console.log(data);











