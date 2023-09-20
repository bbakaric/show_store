import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchJewelery } from '../store/features/jewelery/jewelerySlice'
import AddToCartButton from '../components/AddToCartButton'


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
        {jewel.jewelery.map(item => (
          <div key={item.id} className="product-card">
            <Link to={`/product/${item.id}`} className='products-wrapper__product-link'>
              <div className="product-card__img-wrapper">
                <img src={item.image} alt="product" className="product-card__product-img" />
              </div>
              <h3 className="product-card__product-name">
                {item.title}
              </h3>
              <h4 className="product-card__product-price">
                {item.price} €
              </h4>
            </Link>
            <AddToCartButton />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jewelery