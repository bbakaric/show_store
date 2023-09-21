import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchAllProducts } from '../store/features/allProducts/allProductsSlice'
import ProductCard from '../components/ProductCard'

export const AllProducts = () => {
  const product = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  
  return (
    <div className="products-wrapper">
      <h1 className="products-wrapper__heading">
        All Products
      </h1>
      <div className="products-wrapper__products-cards-wrapper">
        <ProductCard products={product.products}/>
      </div>
    </div>
  )
}

export default AllProducts
