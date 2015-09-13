var React = require('react');
var ReagicForm = require("./reagic-form.js");
var SchemaGenerator = require("./schema-generator.js");

var App = React.createClass({
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
			<div>
        <ReagicForm data={data} onChange={this.onChange} />
      </div>
		);
	},
    onChange: function(newData){
        this.setState({data: newData})
    }

});

module.exports = App;
