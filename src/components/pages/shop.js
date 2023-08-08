import { React, useState, useEffect } from 'react';
import '../css/shop.css';
import cargo_pants from '../../images/download.jpeg';
import black_tote from '../../images/black tote bag.webp';
import crocheted_tote from '../../images/crocheted tote bag.webp';
import new_balance from '../../images/new balance 550.webp';
import nike_shorts from '../../images/nike shorts.webp';
import watch from '../../images/vintage metal watch.webp';
import { supabase } from '../../config/supabaseClient'
import { Form, Alert, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Products from './products.json';


function Shop() {
  const [products, setProducts] = useState([]);
  const [bid, setBid] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: products, error } = await supabase
          .from('products_table')
          .select('*');
        if (error) {
          console.log('Error retrieving products:', error);
        } else {
          setProducts(products);
          console.log(products)

        }
      } catch (error) {
        console.log('Error retrieving products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1> Our Products</h1>
      <div className="explore">
        {Products && Products.map(product => (
          <div className="size" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p style={{ marginTop: '2px' }}>${product.price}</p>
              <p style={{ marginTop: '2px' }}>{product.description}</p>
              <p style={{ marginTop: '2px' }}>{product.brand}</p>
              <p style={{ marginTop: '2px' }}>{product.discountPercentage}% discount</p>
              <p style={{ marginTop: '2px' }}>{product.rating}</p>

            </div>
            {product.bid_info === 'bid' ? (
              <Link to={`/detail/${product.id}`}>
                <Button className='w-100 mb-4' style={{
                  backgroundColor: ' red',
                  color: 'white',
                  fontSize: '15px',
                  padding: '5px 2px',
                  borderRadius: '5px',
                  borderColor: 'transparent',
                  margin: '10px',
                  width: '100px',
                  height: '30px',
                  marginLeft: '130px',
                  cursor: "pointer"

                }}>Auction</Button>
              </Link>
            ) : (
              <Link to={`/shop`}>
                <Button className='w-100 mb-4' style={{
                  backgroundColor: ' #118dda',
                  color: 'white',
                  fontSize: '15px',
                  padding: '5px 2px',
                  borderRadius: '5px',
                  borderColor: 'transparent',
                  margin: '10px',
                  width: '100px',
                  height: '30px',
                  marginLeft: '130px',
                  cursor: "pointer"

                }}>Buy Now</Button>
              </Link>
            )}
          </div>
        ))}


      </div>

    </div>
  );
}
export default Shop;


