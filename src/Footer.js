import React, { Component } from 'react';

class Footer extends Component {

    render() {
      return (
        <div>
            <div className="line"/>
            <h3>Your Cart</h3>
            <h4 className="empty_product">Please add some products to cart.</h4>
            <h4>Total: ${this.props.total}</h4>
            <button onClick={this.props.onReact}>Checkout</button>
        </div>
      );
    }
  }
  
  export default Footer;