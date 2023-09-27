import { Link } from 'react-router-dom'
import AddToCartButton from './AddToCartButton'

type Product = {
    id: number,
    title: string,
    image: string,
    price: number,
    description: string,
    category: string
}

export interface ProductsProp {
    products: Product[],
  }

const ProductCard = ({products}: ProductsProp) => {
    
    return (
       <>
        {products.map(item => (
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
                <AddToCartButton data={item} />
            </div>
        ))}
        </>
    )
}

export default ProductCard