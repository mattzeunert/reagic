var React = require('react');
var ReagicForm = require("./reagic-form.js");
var SchemaGenerator = require("./schema-generator.js");

var App = React.createClass({displayName: "App",
    getInitialState: function(){
        return {
            data:{
                greeting: "Hi",
                title: "How to bake a cake"
            }
        };
    },
	render: function() {
        var data = this.state.data;
        var textareaStyles = {
            width: "100%",
            height: "300px"
        }
        var fiftyPercentWidth = {
            width: "50%"
        }
        var stringifiedData = JSON.stringify(data, null, "    ");
        console.log(JSON.stringify(data))
		return (
			React.createElement("div", null, 
                React.createElement("table", {width: "100%"}, 
                    React.createElement("tr", null, 
                        React.createElement("td", {style: fiftyPercentWidth}, 
                            React.createElement(ReagicForm, {data: data, onChange: this.onChange})
                        ), 
                        React.createElement("td", {style: fiftyPercentWidth}, 
                            React.createElement("textarea", {style: textareaStyles, value: stringifiedData})
                        )
                    )
                )
            )
		);
	},
    onChange: function(newData){
        this.setState({data: newData})
    }
});

module.exports = App;
