var CatalogBlock = React.createClass({

    displayName: 'CatalogBlock',
  
    getDefaultProps: function() {
      return { market: "Магазин скоро откроется" }
    },
  
    render: function() {
  
      var productsCode=[];
      //this.props.products.forEach(function(item){
        for ( var a=0; a<this.props.products.length; a++ ) {
            var product=this.props.products[a];
            var productCode=        
            React.DOM.div({key:product.code,className:'Product'},
                React.DOM.span({className:'Text'},product.text),
                React.DOM.span({className:'Price'},product.price),
                React.DOM.span({className:'Img'},product.img),
                React.DOM.span({className:'Count'},product.count),
            );
            productsCode.push(productCode);
      };
      
      return React.DOM.div( {className:'CatalogBlock'}, 
        React.DOM.div( {className:'Market'}, this.props.market ),
        React.DOM.div( {className:'Products'}, productsCode ),
      );
    },
  
  });