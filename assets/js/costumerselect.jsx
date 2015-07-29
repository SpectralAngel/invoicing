var React = require('react');

var CostumerOption = React.createClass({
    render: function () {
        return <option value="{this.props.id}">{this.props.name}</option>;
    }
});

var CostumerSelect = React.createClass({
    getInitialState: function () {
        return {costumers: []};
    },

    componentDidMount: function () {
        // When the component loads, send a jQuery AJAX request
        var self = this;
        $.getJSON(this.props.source, function (result) {
            if (!result || !result || !result.length) {
                return;
            }
            var costumers = result.map(function (c) {
                return {
                    id: c.id,
                    name: c.name,
                    rtn: c.prefix
                };
            });
            // Update the component's state. This will trigger a render.
            self.setState({costumers: costumers});
        });
    },

    render: function () {
        return <select className="form-control">
            {this.state.costumers.map(function (costumer) {
                return <CostumerOption name={costumer.name} key={costumer.id}
                                       id={costumer.id} ref="costumer" />
            })}
        </select>;
    }
});

module.exports = CostumerSelect;
