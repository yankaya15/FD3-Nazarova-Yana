var CatalogBlock = React.createClass({

    displayName: 'CatalogBlock',
  
    getDefaultProps: function() {
      return { market: "Магазин скоро откроется" }
    },
    
    propTypes: {
      products: React.PropTypes.array.isRequired,
    },

    render: function() {
  
      var productsCode=[];
      this.props.products.forEach(function(product){
            var productCode=        
            React.DOM.tr ({key:product.code,className:'Product'},
                React.DOM.td({className:'Text'},product.text),
                React.DOM.td({className:'Price'},product.price),
                React.DOM.td({className:'Img'},product.img),
                React.DOM.td({className:'Count'},product.count),
            );
            productsCode.push(productCode);
      }
        );
      
      return React.DOM.table( {className:'CatalogBlock'}, 
        React.DOM.caption( {className:'Market'}, this.props.market ),
        React.DOM.tbody( {className:'Products'}, productsCode ),
      );
    },
  
  });
