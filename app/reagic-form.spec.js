var ReagicForm = require("./reagic-form.js");
var React = require('react/addons');

describe("ReagicForm Component", function(){
    var data = {
          name: "Tom"
        },
        domNode,
        component,
        onChange;

    beforeEach(function(){
        component = React.addons.TestUtils.renderIntoDocument(
            <ReagicForm data={data} onChange={function(){
                onChange.apply(this, arguments);
            }} />
        );
        domNode = React.findDOMNode(component);
    })

    it("Renders an input", function(){
        expect(domNode.innerHTML).toContain("<input");
    });

    it("Triggers onChange with the new data if the value is edited", function(done){
        onChange = function(newData){
            expect(newData).toEqual({name: "Thomas"})
            done();
        }

        var input = domNode.querySelector("input");
        input.value = "Thomas";
        React.addons.TestUtils.Simulate.change(input);
    })
});


