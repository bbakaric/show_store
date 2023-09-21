import { useAppSelector } from '../hooks/hooks'
import DeleteFromCart from './DeleteFromCart';

const CartItem = () => {
    const items = useAppSelector(state => state.addToCart);
    return (
        <>
        {items.items.map(item => (
          <div className="cart-item">
            <div className="cart-item__img-wrapper">
                <img src={item.image} alt="Image" className="cart-item__img" />
            </div>
            <p className="cart-item__product-title">
                {item.title}
            </p>
            <p className="cart-item__product-category">
                {item.category}
            </p>
            <p className="cart-item__price">
                {item.price}
            </p>
            <DeleteFromCart />
            <div className="cart-item__item-total">
                <p className="cart-item__product-price">
                    {item.price}
                </p>
                <p className="cart-item__product-price-total">
                    Suma po quantity
                </p>
            </div>
          </div>
        ))}
        </>
    )
}

export default CartItem