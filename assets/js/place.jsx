var React = require('react');

var PlaceRow = React.createClass({


    render: function() {
        return <tr>
                <td>{this.props.name}</td>
                <td>{this.props.prefix}</td>
                <td>{this.props.next_receipt_number}</td>
                <td>{this.props.max_emission_date}</td>
            </tr>;
    }
});

var PlaceTable = React.createClass({

   render: function() {
       return <table className="table table-striped">
            <caption>Places</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Prefix</th>
                    <th>Next Receipt</th>
                    <th>Emission Date Limit</th>
                </tr>
            </thead>
           <tbody>
           {this.props.places.map(function(place) {
               return <PlaceRow name={place.name} key={place.id} id={place.id} prefix={place.prefix} max_emision_date={place.max_emision_date} />
           })}
           </tbody>
       </table>;
   }
});

module.exports = PlaceRow;
module.exports = PlaceTable;
