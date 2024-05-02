import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingDetail from "../components/LoadingDetail";

const ProductDetail = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const { state } = useLocation();
  // const {
    
  //   brand,
  //   category,
  //   description,
  //   discountPercentage,
  //   images,
  //   price,
  //   rating,
  //   stock,
  //   thumbnail,
  //   title,
  // } = state;
  // console.log(state);
  
  
  const {id} = useParams();
  console.log(id);
  const [oneProduct,setOneProduct] = useState({});
  const getOneProduct = async() => {
    const url = "https://dummyjson.com/products/"+id;
    console.log(url);
    try {
      setLoading(true)
      const response = await axios.get(url);
      if(response.status !== 200){
        throw new Error("not 200 get one Product")
      }
      console.log(response);
      setOneProduct(response.data)
    } catch (error) {
      console.log(error);
      
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getOneProduct();
  },[])
  console.log(oneProduct);
  const {
    
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = oneProduct;

  const [mainPicture, setMainPicture] = useState();
useEffect(()=>{
  setMainPicture(thumbnail)
},[oneProduct])




  return (
    <div className="container-wrapper">
      {
        loading ?
        <LoadingDetail />
        :
        (<div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700">
        <div className="flex flex-col lg:flex-row">
          {/* :PICTURES CONTAINER */}
          <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
            {/* ::Like Button */}
            <span className="self-start ml-10">
              <button className="text-gray-300 hover:text-red-500">
                {/* <HeartIcon className="w-10 h-10" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </button>
            </span>
            {/* ::Main Picture */}
            <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
              <img src={mainPicture} className="object-contain w-full h-full" />
            </div>
            {/* ::Gallery */}
            <div className="mt-6 mx-auto">
              <ul className="grid grid-flow-col auto-cols-fr gap-4">
                <li
                  className={`col-span-1 p-1 w-16 rounded border-2 ${
                    thumbnail === mainPicture
                      ? "border-yellow-600"
                      : "border-transparent"
                  }`}
                >
                  <button
                    type="button"
                    className="block h-full rounded overflow-hidden"
                    onClick={() => setMainPicture(thumbnail)}
                  >
                    <img
                      src={thumbnail}
                      alt="detail img"
                      className="object-contain"
                    />
                  </button>
                </li>
                {images?.slice(0, 3) // Here you can manage the number of pictures displayed
                  .map((picture, index) => (
                    <li
                      key={index}
                      className={`col-span-1 p-1 w-16 rounded border-2 ${
                        picture === mainPicture
                          ? "border-yellow-600"
                          : "border-transparent"
                      }`}
                    >
                      <button
                        type="button"
                        className="block h-full rounded overflow-hidden"
                        onClick={() => setMainPicture(picture)}
                      >
                        <img
                          src={picture}
                          alt="detail img"
                          className="object-contain"
                        />
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
  
          {/* :PRODUCT DETAILS */}
          <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">
            {/* ::Description Container */}
            <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
              {/* :::Name */}
              <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">
                {title}
              </h1>
              {/* :::Description */}
              <p className="mt-10 text-base text-gray-500">{description}</p>
  
              {/* :::Features */}
              {/* <ul className="my-5 flex flex-col space-y-2">
                {product.features.map(feature => (
                  <li key={feature.name} className="inline-flex items-center space-x-2 text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    <span className="text-sm font-semibold">{feature.name}:</span>
                    <span className="text-sm font-normal">{feature.details}</span>
                  </li>
                ))
                }
              </ul> */}
            </div>
  
            {/* ::Customization Container */}
            <div className="order-1 lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200">
              {/* :::Name */}
              <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">
                {brand}
              </h1>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* :::Color */}
                <label htmlFor="color" className="sr-only">
                  Select your color
                </label>
                <select
                  name="color"
                  id="color"
                  className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0"
                >
                  <option value="">Color</option>
                  {["Purple", "Blue", "Red", "Green", "Dark", "White"].map(
                    (color) => (
                      <option value={color}>{color}</option>
                    )
                  )}
                </select>
              </div>
            </div>
  
            {/* ::Actions Container */}
            <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
              {/* :::Price */}
              <span className="m-2.5 text-md text-gray-500 font-extrabold capitalize">
                <span className="font-normal ">Category: </span>
                {category}
              </span>
              <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
                <span className="font-normal">$</span>
                {price}
              </span>
              {/* :::Add to cart button */}
              <div>
                <button
                  type="button"
                  className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-[#61617F] text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-[#434358] transition-all"
                  onClick={()=>navigate(-1)}
                >
                  {/* <ShoppingBagIcon className="mr-3 w-6 h-6" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back
                </button>
                <button
                  type="button"
                  className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-[#61617F] text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-[#434358] transition-all"
                  onClick={()=>navigate('/home')}
                >
                  {/* <ShoppingBagIcon className="mr-3 w-6 h-6" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 w-6 h-6"
                  >
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>)

      }
</div>


    
  );
};

export default ProductDetail;
