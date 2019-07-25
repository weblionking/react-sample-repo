import React, { Component } from 'react';

class Product extends Component {
    
    handleClick = () => {
        alert('adfasf');
    }

    render() {
    const {title,cnt,price,id} = this.props.product;
    const onClick = this.props.onClick;
      return (
        <div>
            <h4>{} {title}- ${price} x {cnt} {}</h4>
            <button type="button" onClick={onClick}>Add to cart</button>
            
        </div>
      );
    }
  }
  
  export default Product;