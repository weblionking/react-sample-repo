import React, { Component } from 'react';
import Product from './Product';


class Content extends Component {
    constructor(props) {
        super(props);
        
      }


    render() {
      return (
        <div>
            <h3>Products</h3>
            {
                this.props.data.map(item =>
                <Product product={item} onClick={() => this.props.onAdd(item.id)}/>       
                )
            }
        </div>
      );
    }
  }
  
  export default Content;