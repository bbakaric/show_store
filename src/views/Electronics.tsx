import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchElectronics } from '../store/features/electronics/electronicsSlice'
import ProductCard from '../components/ProductCard'
import ScrollToTopButton from '../components/ScrollToTopButton'

export const Electronics = () => {
  const electronic = useAppSelector(state => state.electronics )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchElectronics())
  }, [dispatch])
  
  return (
    <div className="products-wrapper">
      <h1 className="products-wrapper__heading">
        Electronics
      </h1>
      <div className="products-wrapper__products-cards-wrapper">
        <ProductCard products={electronic.electronics}/>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default Electronics
