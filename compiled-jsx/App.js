var React = require('react');
var ReagicForm = require("./reagic-form.js");
var SchemaGenerator = require("./schema-generator.js");

var App = React.createClass({displayName: "App",
	render: function() {
    var data = {
      greeting: "Hi"
    }

		return (
			React.createElement("div", null, 
        React.createElement(ReagicForm, {data: data})
      )
		);
	}

});

module.exports = App;
