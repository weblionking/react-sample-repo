import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      total : 0, 
      data: [
        {id: 0, title: "iPad 4 Mini", price: 500.01, cnt: 10},
        {id: 1, title: "H & M T-Shirt White", price: 10.99, cnt: 10},
        {id: 2, title: "Charil XCX - Sucker CD", price: 19.99, cnt: 10}
      ]
    };

  }


  addToCart = (id) => {
    console.log(this.state.data[id]);
    if (this.state.data[id].cnt === 0) return ;
      this.setState((prevState, props) => {
      return {total: prevState.total + prevState.data[id].price};
    })
    
    this.setState((prevState, props) => {
      let tempData = prevState.data;
      tempData[id].cnt -- ;
      return {data: tempData}
    });
  }


  reset() {

    this.setState({
      total: 0.0,
      data: [
        {id: 0, title: "iPad 4 Mini", price: 500.01, cnt: 10},
        {id: 1, title: "H & M T-Shirt White", price: 10.99, cnt: 10},
        {id: 2, title: "Charil XCX - Sucker CD", price: 19.99, cnt: 10}
      ]
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Content data={this.state.data} onAdd={this.addToCart}/>
        <Footer total={this.state.total} onReact={() => this.reset()}/>
      </div>
    );
  }
}

export default App;
