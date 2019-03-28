var CatalogProducts = React.createClass({

    displayName : 'CatalogProducts',

    propTypes : {
        text : React.PropTypes.string.isRequired,
        price : React.PropTypes.string.isRequired,
        img : React.PropTypes.string.isRequired,
        count : React.PropTypes.number.isRequired,
    },

    render: function() {

             return React.DOM.tr ({className:'CatalogProducts'},
                  React.DOM.td({className:'Text'},this.props.text),
                  React.DOM.td({className:'Price'},this.props.price),
                  React.DOM.td({className:'Img'},this.props.img),
                  React.DOM.td({className:'Count'},this.props.count),
              );
              
        }
})