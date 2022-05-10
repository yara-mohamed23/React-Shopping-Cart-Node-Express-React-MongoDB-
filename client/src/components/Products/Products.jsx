import React from 'react'
import "../../css/Products/Products.css"

 function Products(props) {
     console.log(props);
  return (
    <div className='products-wrapper'>
    {props.products.map(Product => (
    <div className="product-item" key={Product.id}>
        <img src={Product.imageUrl} alt={Product.title} />
    <div className="product-desc">
        <p>{Product.title}</p>
        <span>{Product.price}</span>
    </div>
    <button>Add To Cart</button>
    </div>
))}
</div>
  )
}

export default Products;
