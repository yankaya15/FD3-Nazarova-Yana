var CatalogBlock = React.createClass({

    displayName: 'CatalogBlock',
  
    getDefaultProps: function() {
      return { market: "Магазин скоро откроется" }
    },
    
    propTypes: {
      products: React.PropTypes.array.isRequired,
    },

    render: function() {
  
      var productsCode=this.props.products.map(product=>
            React.createElement(CatalogProducts,
                {key:product.code,text:product.text,price:product.price,img:product.img,count:product.count})           
        );
      
      return React.DOM.div( {className:'CatalogBlock'}, 
        React.DOM.span( {className:'Market'}, this.props.market ),
        React.DOM.table( {className:'Products'},
         React.DOM.tbody({className:'CatalogProducts'}, productsCode )
      ));
    },
  
  });