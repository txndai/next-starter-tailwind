
import { useContext } from 'react';
import CartContext from '../components/cartContext';
import Layout from "../components/layout";


const Cart = () => {
   const { cart, carttotal } = useContext(CartContext);
   return(
     <Layout>
     <div>
      <h3 >Cart Items</h3>
      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="p-5 mb-5 bg-white rounded shadow-sm col-lg-12">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(item =>
                    <tr>
                      <th scope="row" className="border-0">
                        <div className="p-2">
                          <img src={item.image} alt="product" width="70" className="rounded shadow-sm img-fluid"/>
                          <div className="ml-3 align-middle d-inline-block">
                          <h5 className="mb-0"> <a href="#" className="align-middle text-dark d-inline-block">{item.description}</a></h5>
                          </div>
                        </div>
                      </th>
                      <td className="align-middle border-0"><strong>$ {item.price}</strong></td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
             <ul className="mb-4 list-unstyled">
                <li className="py-3 d-flex justify-content-between border-bottom"><strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">$ {carttotal}</h5>
                </li>
              </ul>
              <a href="#" className="py-2 btn btn-dark rounded-pill btn-block">Procceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
     </div>
     </Layout>
   )
}
export default Cart;