import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const {id,category,price,brand,images} = item;

  return (
    <div className="h-[400px] shadow-2xl rounded-xl cursor-pointer" onClick={()=>navigate(`/products/${id}`)}>
        <div className="w-full h-3/4">
      <img className="w-full h-full object-contain" src={images[0]} alt="" />
        </div>
      <div className="px-2 py-2">
        <div className="flex items-center justify-between">
          <p className="text-slate-400 font-[500] py-1">{brand}</p>
          <span>{price} $</span>
        </div>
        <div>
          <span className="text-slate-400 font-[500]">{category}</span>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
