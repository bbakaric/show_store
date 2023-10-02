import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchJewelery } from '../store/features/jewelery/jewelerySlice'
import ProductCard from '../components/ProductCard'
import ScrollToTopButton from '../components/ScrollToTopButton'

const Jewelery = () => {
  const jewel = useAppSelector(state => state.jewelery )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchJewelery())
  }, [dispatch])

  return (
    <div className="products-wrapper">
      <h1 className="products-wrapper__heading">
        Jewelery
      </h1>
      <div className="products-wrapper__products-cards-wrapper">
        <ProductCard products={jewel.jewelery}/>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default Jewelery