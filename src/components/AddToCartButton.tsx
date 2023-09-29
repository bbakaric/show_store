import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { addItem, totalSumAdd } from "../store/features/cartLogic/cartSlice"

export interface DataProp {
  data: {
    id:number,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string,
  }
}

const AddToCartButton = ({data}: DataProp) => {
  const items = useAppSelector(state => state.addToCart.items);
  const quantityIndicator = useAppSelector(state => state.addToCart.quantityIndicator);
  const dispatch = useAppDispatch();
  const itemInfo = {
    id: data.id,
    title: data.title,
    price: data.price,
    image: data.image,
    description: data.description,
    category: data.category,
    cartQuantity: 1
  }
  useEffect(() => {
    if (items.length > 0) {  
      if (items.filter(e => e.id === data.id).length > 0) {
        const btn: HTMLElement = document.getElementById(`${data.id}`)!;
        btn.classList.remove('add-to-cart-btn__active');
        btn.classList.add('add-to-cart-btn__inactive');
        btn.innerText = 'Added To Cart';
      }
      return
    }
  }, [data.id, items, quantityIndicator])
  
  const addToCart = () => {
    dispatch(addItem(itemInfo));
    dispatch(totalSumAdd(data.price))
  }

  const change = (id: number) => {
    const btn: HTMLElement = document.getElementById(`${id}`)!;
    btn.classList.remove('add-to-cart-btn__active');
    btn.classList.add('add-to-cart-btn__inactive');
    btn.innerText = 'Added To Cart';
  }
  
  return (
    <button id={data.id.toString()} className="add-to-cart-btn add-to-cart-btn__active" onClick={() => {
      addToCart()
      change(data.id)
    }}>
        Add To Cart
    </button>
  )
}

export default AddToCartButton