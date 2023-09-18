import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchAllProducts } from '../store/features/allProducts/allProductsSlice'

export const AllProducts = () => {
  const product = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  return (
    <div>
      <h2>List of Products</h2>
      
        <ul>
          {product.products.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default AllProducts
