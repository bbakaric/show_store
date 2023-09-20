import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchMensClothes } from '../store/features/menProducts/menProductsSlice'
import AddToCartButton from '../components/AddToCartButton'

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
        {mensClothes.mensClothes.map(item => (
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

export default Mens