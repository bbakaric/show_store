import { useAppDispatch } from '../hooks/hooks'
import { add } from "../store/features/addToCart/addToCartSlice"

export interface DataProp {
  data: {
    id:number,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string
  }
}

const AddToCartButton = ({data}: DataProp) => {
  const dispatch = useAppDispatch();
  
  const addToCart = () => {
    dispatch(add(data));
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