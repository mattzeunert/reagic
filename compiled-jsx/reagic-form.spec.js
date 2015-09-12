var ReagicForm = require("./reagic-form.js");
var React = require('react/addons');

describe("ReagicForm Component", function(){
    it("Renders something", function(){
        var data = {
          name: "Tom"
        };

        var domNode = React.addons.TestUtils.renderIntoDocument(
            React.createElement(ReagicForm, {data: data})
        ).getDOMNode();

        expect(domNode.innerHTML).toContain("<input");

    });
});
