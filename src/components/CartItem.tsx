import { useAppSelector } from '../hooks/hooks'
import DeleteFromCart from './DeleteFromCartButton'
import QuantityInput from './QuantityInput'

const CartItem = () => {
    const items = useAppSelector(state => state.addToCart);
    
    return (
        <>
        {items.items.map(item => (
          <div key={item.id} className="cart-item">
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
                {item.price.toFixed(2)} €
            </p>
            <DeleteFromCart item = {item}/>
            <div className="cart-item__item-total">
                <p key={item.id} className="cart-item__product-price">
                    {item.sumQuantity.toFixed(2)} €
                </p>
                <QuantityInput data = {item}/>
            </div>
          </div>
        ))}
        </>
    )
}

export default CartItem