var React = require('react');
var Costumers = require('./costumers');
var Costumer = require('./costumer');
var Companies = require('./company');

module.exports = React.createClass({
    render: function(){
        return <div className="row">
            <div className="col-md-6 col-xs-6">
                <Costumers source="/api/v1/costumers/" />
            </div>
            <div className="col-md-6 col-xs-6">
                <Companies source="/api/v1/companies/" />
            </div>
        </div>;
    }
});
