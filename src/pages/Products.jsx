
import ProductCard from '../components/ProductCard';
import LoadingCard from '../components/LoadingCard';
import SearchInput from '../components/SearchInput';
import { useProductsContext } from '../context/ProductsProvider';
import Scroll from '../components/Scroll';
const Products = () => {

const {search,setSearch,products,loading} = useProductsContext();


  return (
    <div className='relative'>
    
    <div className='container-wrapper '>
      <SearchInput  />
      <h2 className='text-[#3E3E58] text-3xl font-semibold'>All Products</h2> 
        {
        loading ? (
          <div className='flex flex-wrap'>

          {[1,2,3,4,5,6]?.map((item,i)=> <LoadingCard key={i} />)}
          </div>
        
        )
        : products.length > 1 ?
      (<div className="py-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 grid-row">

        {products?.map(item => <ProductCard key={item.id} item={item} />)}
        
      </div>)
      :
      <h2 className='text-center text-red-500 text-3xl my-10'>No Products</h2>
        }
    </div>
    <Scroll/>
    </div>
  )
}

export default Products;