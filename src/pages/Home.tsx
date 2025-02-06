import { useEffect, useState } from 'react';
import { Product } from '../types/types';
import ProductCard from '../components/ProductCard';
import { useProductContext } from '../context/ProductContext';
import { useQuery } from 'react-query';
import { Category, fetchCategories, fetchProducts } from '../api/api';

const Home: React.FC = () => {
  const { products, selectedCategory, dispatch } = useProductContext();

  const { data: productsData, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  console.log(categories);

  useEffect(() => {
    if (productsData) {
      dispatch({ type: 'SET_PRODUCTS', payload: productsData.data });
    }
  }, [productsData, dispatch]);

  const getFilteredProducts = () => {
    if (selectedCategory) {
      return products?.filter(
        (product: Product) => product.category === selectedCategory
      );
    }
    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })
        }
      >
        <option value=''>All Categories</option>
        {categories?.data.map((category: Category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {isLoading && <h1>Loading...</h1>}
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;
