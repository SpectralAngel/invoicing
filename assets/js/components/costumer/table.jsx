var React = require('react');
var Reflux = require('reflux');
var costumerActions = require('../../actions/costumer');
var costumerStore = require('../../stores/costumers');

var CostumerRow = React.createClass({
    render() {
        return <tr>
            <td>{this.props.costumer.name}</td>
            <td>{this.props.costumer.rtn}</td>
        </tr>;
    }
});

var CostumerTable = React.createClass({
    mixins: [Reflux.connect(costumerStore, 'costumers')],
    render() {
        return (
            <div className="col-md-12 col-xs-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Costumers</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>RTN</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.costumers.map(
                                    costumer => <CostumerRow key={costumer.id} costumer={costumer} />
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CostumerTable;
