var React = require('react');
var Costumer = require('./costumer');

var Costumers = React.createClass({
    getInitialState : function() {
      return { costumers: [] };
    },

    componentDidMount: function(){
        // When the component loads, send a jQuery AJAX request
        var self = this;

        $.getJSON(this.props.source, function(result){

            if(!result || !result || !result.length){
                return;
            }

            var costumers = result.map(function(c){
                return {
                    id: c.id,
                    name: c.name,
                    rtn: c.rtn
                };
            });

            // Update the component's state. This will trigger a render.

            self.setState({ costumers: costumers });

        });

    },

    render : function() {

        var costumers = this.state.costumers.map(function(costumer) {
            return <Costumer key={costumer.id} name={costumer.name} rtn={costumer.rtn} />;
        });
        return <div className="costumers">
            <section className="page-header">
                <h1>Costumers</h1>
            </section>
            {costumers}
            </div>;
    }
});

module.exports = Costumers;
