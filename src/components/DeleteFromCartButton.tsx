import { useAppDispatch } from '../hooks/hooks'
import { removeItem, quantityIndicatorDecrease } from "../store/features/cartLogic/cartSlice"

export interface Item {
  item: {
    id:number,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string,
    cartQuantity: number,
  }
}

const DeleteFromCart = ({item}: Item) => {
  const dispatch = useAppDispatch();

  return (
    <button className="delete-from-cart-btn" onClick={() => {
      dispatch(removeItem(item.id))
      dispatch(quantityIndicatorDecrease())
    }}>
        Remove
    </button>
  )
}

export default DeleteFromCart