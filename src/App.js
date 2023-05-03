import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img:'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://media.istockphoto.com/id/1440355020/photo/hand-holding-smartphone-isolated-on-white-background-clipping-path.jpg?s=612x612&w=is&k=20&c=S8jl0nRfu9AaxaLiuBB9mv5jDAqFQ_KImO0HPwaicVw=',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () =>{
    const {products}= this.state;

    let cartTotal=0;

    products.map((product) => {
      cartTotal =cartTotal+ product.qty * product.price;
    })
    return cartTotal;
  }

  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
          <div style={{padding:20,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    
    );
  }
}

export default App;
