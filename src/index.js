import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import App from './App';
import './index.css';

const Title = ({title}) => {
  return (
    <div>
       <div>
          <h1 className="title">{title}</h1>
       </div>
    </div>
  );
}

const SubTitle = ({subtitle}) => {
  // Input Tracker
  // let input;
  // Return JSX
  return (
    <div>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
}

const Product = ({product}) => {
  // Each Todo
  return (<div>
    <h3 className="product">{product.name}-${product.price} x {product.num}</h3>
  </div>);
}

const AddToCartButton = () => {
  return (
    <button type="button" title="Add to cart">Add to cart</button>
  );
}

const EmptyProduct = ({empty_str}) => {
  return (<div>
    <h3 className="empty_product">{empty_str}</h3>
  </div>);
}

const Total = ({total}) => {
  return (
    <div>
      <h3 className="total">Total: ${total}</h3>
    </div>
  );
}

const CheckOut = () => {
  return (
    <button type="button">CheckOut</button>
  );
}

const Line = () => {
  return <div className="line"/>;
}
// Contaner Component
class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }
  // Lifecycle method
  componentDidMount(){
  
  }
  // Add todo handler
  addTodo(val){
    // // Assemble data
    // const todo = {text: val}
    // // Update data
    // axios.post(this.apiUrl, todo)
    //    .then((res) => {
    //       this.state.data.push(res.data);
    //       this.setState({data: this.state.data});
    //    });
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    // const remainder = this.state.data.filter((todo) => {
    //   if(todo.id !== id) return todo;
    // });
    // // Update state with filter
    // axios.delete(this.apiUrl+'/'+id)
    //   .then((res) => {
    //     this.setState({data: remainder});      
    //   })
  }
 
  render(){
    // Render JSX
    // return (
    //   <div>
    //     <Title todoCount={this.state.data.length}/>
    //     <TodoForm addTodo={this.addTodo.bind(this)}/>
    //     <TodoList 
    //       todos={this.state.data} 
    //       remove={this.handleRemove.bind(this)}
    //     />
    //   </div>
    // );

    return (
      <div>
       
        <Title title="Shopping Cart Example"/>
        <br/>
        <Line />
        <SubTitle subtitle="Products"/>
        
        <Product product={{name:"iPad 4 Mini", price:"500.01", num:2}}/>
        <AddToCartButton />
        <Product product={{name:"H&M T-Shirt White", price:"10.99", num:10}}/>
        <AddToCartButton />
        <Product product={{name:"Charli XCX - Sucker", price:"19.99", num:5}}/>
        <AddToCartButton />
        <br></br>
        <Line />
        <SubTitle subtitle="Your Cart"/>
        <EmptyProduct empty_str="Please add some products to cart."/>
        <Total total="0.00"/>
        <CheckOut />
      </div>
    );
  }
}




ReactDOM.render(<TodoApp />, document.getElementById('container'));
