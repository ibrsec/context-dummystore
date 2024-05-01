import axios from 'axios';
import React, { useEffect, useState } from 'react'
import data from './datasil';
import ProductCard from '../components/ProductCard';
import LoadingCard from '../components/LoadingCard';
import SearchInput from '../components/SearchInput';
const Products = () => {


  const [products,setProducts] = useState([]);
  const[loading,setLoading] = useState(false);
  const [searchValue,setSearchValue] = useState("");

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
    // getProducts(searchValue);
    setProducts(data)
  },[])
console.log(products);
  return (
    <div className='container-wrapper '>
      <SearchInput />
      <h2 className='text-[#3E3E58] text-3xl font-semibold'>All Products</h2> 
        {
        loading ? (
          <div className='flex flex-wrap'>

          {[1,2,3,4,5,6]?.map(item=> <LoadingCard />)}
          </div>
        
        )
        :
      (<div className="py-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 grid-row">

        {products?.map(item => <ProductCard item={item} />)}
        
      </div>)
        }
    </div>
  )
}

export default Products;