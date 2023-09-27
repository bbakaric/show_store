import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { fetchProduct } from '../store/features/singleProduct/singleProductSlice'
import AddToCartButton from '../components/AddToCartButton'

const ProductPage = () => {
  const product = useAppSelector(state => state.singleProduct);
  const dispatch = useAppDispatch();
  const {id} = useParams();
  
  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [dispatch, id])

  const { image, title, rating, category, price, description } = product.product
  
  return (
    <div className="pdp-wrapper">
      <div className="pdp-wrapper__top-content">
        <div className="pdp-wrapper__img-wrapper">
          <img src={image} alt="product" className="pdp-wrapper__product-img" />
        </div>
        <div className="pdp-wrapper__info-box">
          <h4 className="pdp-wrapper__product-title">
            {title}
          </h4>
          <p className="pdp-wrapper__product-rating">
            Rating: {rating.rate}
          </p>
          <p className="pdp-wrapper__product-category">
            Category:
            <Link to={`/${category}`} className='pdp-wrapper__category-link'>
              {category}
            </Link>
          </p>
          <p className="pdp-wrapper__product-price">
            Price: {price} €
          </p>
          <AddToCartButton data={product.product}/>
        </div>
      </div>
      <div className="pdp-wrapper__bottom-content">
        <h4 className="pdp-wrapper__sub-heading">
          Description
        </h4>
        <p className="pdp-wrapper__product-description">
          {description}
        </p> 
      </div>
  </div>
  )
}

export default ProductPage