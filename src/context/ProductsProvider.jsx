
import React, { useEffect, useState,createContext, useContext } from 'react'
import axios from 'axios';
import data from '../pages/datasil'; 

const ProductsContext = createContext();


const ProductsProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const[loading,setLoading] = useState(false);
    const [search,setSearch] = useState("");
  
    const getProducts = async(searchValue) => {
  
      try{
        setLoading(true)
        const response = await axios.get(`https://dummyjson.com/products/search?q=`+(searchValue || ""));
        if(response.status !== 200){
          throw new Error("Not 200 get products")
        }
        setProducts(response.data.products)
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false)
  
      }
    }
    useEffect(()=>{
      getProducts(search);
    //   setProducts(data)
    },[search])
  console.log(products);

  const values = {search,setSearch,products,loading}

  return (
    <ProductsContext.Provider value={values}>
        {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
}

export default ProductsProvider