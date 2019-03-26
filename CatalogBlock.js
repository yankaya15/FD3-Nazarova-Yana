var CatalogBlock = React.createClass({

    displayName: 'CatalogBlock',
  
    getDefaultProps: function() {
      return { market: "Магазин скоро откроется" }
    },
  
    render: function() {
  
      var productsCode=[];
      //products.prototype.forEach(function(item){
        for ( var a=0; a<this.props.products.length; a++ ) {
            var product=this.props.products[item];
            var productCode=        
            React.DOM.tr ({key:product.code,className:'Product'},
                React.DOM.td({className:'Text'},product.text),
                React.DOM.td({className:'Price'},product.price),
                React.DOM.td({className:'Img'},product.img),
                React.DOM.td({className:'Count'},product.count),
            );
            productsCode.push(productCode);
      };
      
      return React.DOM.table( {className:'CatalogBlock'}, 
        React.DOM.thead( {className:'Market'}, this.props.market ),
        React.DOM.tbody( {className:'Products'}, productsCode ),
      );
    },
  
  });