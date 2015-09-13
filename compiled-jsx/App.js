var React = require('react');
var ReagicForm = require("./reagic-form.js");
var SchemaGenerator = require("./schema-generator.js");

var App = React.createClass({displayName: "App",
    getInitialState: function(){
        return {data:{
          greeting: "Hi",

        title: "How to bake a cake"
    }
        }

    },
	render: function() {
    var data = this.state.data;
		return (
			React.createElement("div", null, 
        React.createElement(ReagicForm, {data: data, onChange: this.onChange})
      )
		);
	},
    onChange: function(newData){
        this.setState({data: newData})
    }

});

module.exports = App;
