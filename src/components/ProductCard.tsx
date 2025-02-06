import { Product } from '../types/types';
import '../styles/ProductCard.css';
import { CSSProperties } from 'react';
import StarRatings from 'react-star-ratings';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const productImage: CSSProperties = {
    width: '100px',
  };

  const { addToCart } = useCart();

  return (
    <div className='product-card'>
      <h1>{product.title}</h1>
      <h4>{product.category}</h4>
      <p>{product.price}</p>
      <StarRatings
        rating={product.rating.rate}
        numberOfStars={5}
        name='rating'
        starRatedColor='gold'
        starDimension='25px'
      />
      <img src={product.image} alt={product.title} style={productImage} />
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Shopping Cart</button>
    </div>
  );
};
export default ProductCard;
