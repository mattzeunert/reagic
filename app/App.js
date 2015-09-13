var React = require('react');
var ReagicForm = require("./reagic-form.js");
var SchemaGenerator = require("./schema-generator.js");

var App = React.createClass({
    getInitialState: function(){
        return {
            data:{
                greeting: "Hi",
                title: "How to bake a cake",
                age: 19
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
			<div>
                <table width="100%">
                    <tr>
                        <td style={fiftyPercentWidth}>
                            <ReagicForm data={data} onChange={this.onChange} />
                        </td>
                        <td style={fiftyPercentWidth}>
                            <textarea style={textareaStyles} value={stringifiedData}></textarea>
                        </td>
                    </tr>
                </table>
            </div>
		);
	},
    onChange: function(newData){
        this.setState({data: newData})
    }
});

module.exports = App;
