var React = require('react');

var Costumer = React.createClass({
    render : function() {
        return <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.name}</h3>
            </div>
            <div className="panel-body">
                <dl>
                    <dt>RTN</dt><dd>{this.props.rtn}</dd>
                </dl>
            </div>
        </div>;
    }
});

module.exports = Costumer;
