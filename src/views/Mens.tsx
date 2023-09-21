import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchMensClothes } from '../store/features/menProducts/menProductsSlice'
import ProductCard from '../components/ProductCard'

const Mens = () => {
  const mensClothes = useAppSelector(state => state.mensClothes )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchMensClothes())
  }, [dispatch])

  return (
    <div className="products-wrapper">
      <h1 className="products-wrapper__heading">
        Men's Clothing
      </h1>
      <div className="products-wrapper__products-cards-wrapper">
      <ProductCard products={mensClothes.mensClothes}/>
      </div>
    </div>
  )
}

export default Mens