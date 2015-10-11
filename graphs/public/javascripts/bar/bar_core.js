
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