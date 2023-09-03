
import {React, useEffect, useState} from "react"
import Header from "./components/Header"
import axios from "axios";
import Footer from "./components/Footer";

function Product(){

        const [products, setProducts] = useState([]);


        const getAllProducts = () => {
            axios.get("https://fakestoreapi.com/products").then((response) => {
                setProducts(response.data)
            }).catch((error) => {
                console.log(error)
            })
        }

        useEffect(() => {
            getAllProducts()
        },[])

   
    return <div>
        <Header />

        <div className="grid grid-cols-1 justify-center p-10 sm:grid-cols-4 sm:p-20">

        {
            products.map((product, index) => (

                <div className="border-2 border-green-200 p-5 m-2 text-center rounded">
                    <img src={product.image} width="200px" />
                    <p>{product.title}</p>
                    <h4 className="font-bold">${product.price}</h4>

                </div>
              
            ))
        }
          </div>

          <Footer />
</div>

           
}

export default Product