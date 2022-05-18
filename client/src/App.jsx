import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import data from "./data.json";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState(data);
  // console.log(products);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const [CartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [] );

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    // console.log(e.target.value)

    // eslint-disable-next-line
    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      //to get properties of the object from data.json--> id,name,size,price
      let productsClone = (data);
      console.log(productsClone);
      //to search if the value that user choose it there on this object or not
      // eslint-disable-next-line
      let newProducts = productsClone.filter(
              // eslint-disable-next-line
        (p) => p.size.indexOf(e.target.value) != -1
      );
      //console.log("newProducts",newProducts)
      //set the new value that user cho0o0ose it
      setProducts(newProducts);
    }
  };

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    // console.log(e.target.value)

    let productsClone = [...products];

    let newProducts = productsClone.sort(function (a, b) {
      // eslint-disable-next-line
      if (order == "lowest") {
        return a.price - b.price
      }
      // eslint-disable-next-line
      else if (order == "highest") {
        return b.price - a.price
      }
      // eslint-disable-next-line
      else if(order == "latest"){
        return a.id < b.id ? 1 : -1
      }
       else {
        return a.id > b.id ? 1 : -1
      }
    })
    setProducts(newProducts)

  };


  const addToCart = (product) => {
    const cartItemsClone = [...CartItems];
    var isProductExist = false;
    cartItemsClone.forEach(p => {
      if(p.id == product.id){
      p.qty ++;
      isProductExist=true;
    }
    })
    if(!isProductExist){
      cartItemsClone.push({...product,qty:1})
    }
    setCartItems(cartItemsClone)
  }

  useEffect(()=> {
    localStorage.setItem('cartItems', JSON.stringify(CartItems))
  }, [CartItems])





const removeFromCart = (product)=> {
  const cartItemsClone = [...CartItems]
  setCartItems(cartItemsClone.filter(p => p.id !== product.id))
}



  return (
    <div className="App">
      <div className="App">
        <div className="layout">
          <Header />
          <main>
            <div className="wrapper">
              <Products products={products} addToCart={addToCart} />
              <Filter
              productsNumber={products.length}
                size={size}
                sort={sort}
                handleFilterByOrder={handleFilterByOrder}
                handleFilterBySize={handleFilterBySize}
              />

              
            </div>
            <Cart CartItems={CartItems} removeFromCart={removeFromCart} />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
