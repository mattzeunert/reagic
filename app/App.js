var React = require('react');
var ReagicForm = require("./reagic-form.js");
var SchemaGenerator = require("./schema-generator.js");

var App = React.createClass({
	render: function() {
    var data = {
      greeting: "Hi"
    }

		return (
			<div>
        <ReagicForm data={data} />
      </div>
		);
	}

});

module.exports = App;
