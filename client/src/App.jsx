import React, {useState} from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from './data.json'

function App() {
    const [products, setProducts] = useState(data);
// console.log(products)
  return (
    <div className="App">
    <div className="App">
      <div className="layout">
        <Header/>
        <main>
            <div className="wrapper">
                <Products products={products}/>
                <div className="filter-wrapper">Filter</div>
            </div>
        </main>
        <Footer/>
      </div>
    </div>
  </div>

  );
}

export default App;
