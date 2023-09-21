export interface DataProp {
  data: {
    id:number,
    title: string,
    price: number,
    image: string,
    description: string
  }
}

const AddToCartButton = ({data}: DataProp) => {
  const test = () => {
    console.log(data);
    
  }
  return (
    <button className="add-to-cart-btn" onClick={test}>
        Add To Cart
    </button>
  )
}

export default AddToCartButton