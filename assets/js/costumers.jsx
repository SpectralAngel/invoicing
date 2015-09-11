var React = require('react');
var Reflux = require('reflux');
var Costumer = require('./costumer');
var costumerActions = require('./actions/costumer');
var costumerStore = require('./stores/costumers');

var Costumers = React.createClass({
    mixins: [Reflux.connect(costumerStore, 'costumers')],

    render() {

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
