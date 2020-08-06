import Products from '../components/Products.js'
import fetch from 'isomorphic-unfetch'
import Layout from "../components/layout";

// this file is where I can put the cosmic query

const Index = (props) => (
  <Layout>
    <Products products={props.products}/>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://my-json-server.typicode.com/mood-board/demo/products');
  const data = await res.json();
  return {
    products: data
  };
};
export default Index