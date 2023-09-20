import { Link } from 'react-router-dom'

import AddToCartButton from './AddToCartButton'

const ProductCard = () => {
    return (
        <></>
        /*
       <>
        {product.map(item => (
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
        </>*/
    )
}

export default ProductCard