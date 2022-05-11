import React, {useState} from 'react'
import "../../css/Products/Products.css"
import ProductModal from '../../css/Products/ProductModal';
 function Products(props) {
     console.log(props);

const [product, setProduct] = useState("");

const openModal = (product) =>{
    setProduct(product)
}

const closeModal = () =>{
  setProduct(false)
}

  return (
    <div className='products-wrapper'>
    {props.products.map(product => (
    <div className="product-item" key={product.id}>
        <a href="#" onClick={() => openModal(product)}>
        <img src={product.imageUrl} alt={product.title}  />
        </a>
    <div className="product-desc">
        <p>{product.title}</p>
        <span>${product.price}</span>
    </div>
    <button>Add To Cart</button>
    </div>
))}

<ProductModal product={product} closeModal={closeModal} />


</div>
  )
}

export default Products;
