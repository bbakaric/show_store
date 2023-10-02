import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchWomenClothing } from '../store/features/womenProducts/womenProductsSlice'
import ProductCard from '../components/ProductCard'
import ScrollToTopButton from '../components/ScrollToTopButton'

const Womens = () => {
  const womenClothing = useAppSelector(state => state.womensClothes )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchWomenClothing())
  }, [dispatch])
  
  return (
    <div className="products-wrapper">
    <h1 className="products-wrapper__heading">
      Women's Clothing
    </h1>
    <div className="products-wrapper__products-cards-wrapper">
      <ProductCard products={womenClothing.womenClothes}/>
    </div>
    <ScrollToTopButton />
  </div>
  )
}


export default Womens