const AddToCartButton = () => {
    const test = () => {
        console.log('Product added to cart!');
        
    }
  return (
    <button className="add-to-cart-btn" onClick={test}>
        Add To Cart
    </button>
  )
}

export default AddToCartButton