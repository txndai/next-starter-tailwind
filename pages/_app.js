
import App from 'next/app'
import Layout from '../components/layout.js'
import cartContext from '../components/cartContext';
import "../css/index.css";


export default class MyApp extends App {

  state = {
      cart : [],
      carttotal : 0
  }

  componentDidMount = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const carttotal = JSON.parse(localStorage.getItem('total'));
    if (cart) {
      this.setState({
         cart,
         carttotal
      });
    }
  };

  addToCart = (product) => {
    this.setState({
        cart: [...this.state.cart, product]
    });
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  }

  calculateTotal = (price) => {
    this.setState({
      carttotal: this.state.carttotal + price
    });
    localStorage.setItem('total', JSON.stringify(this.state.carttotal));
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <cartContext.Provider value={{cart: this.state.cart, addToCart: this.addToCart, total: this.calculateTotal, carttotal: this.state.carttotal}}>
          <Component {...pageProps} />
      </cartContext.Provider>
    )
  }
}