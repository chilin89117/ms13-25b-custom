import {useCustomStore} from '../store/customStoreHook'
import ProductItem from '../components/Products/ProductItem'
import './Products.css'

const Products = () => {
  const state = useCustomStore()[0]
  
  return (
    <ul className='products-list'>
      {state.products.map(prod => <ProductItem key={prod.id} prod={prod} />)}
    </ul>
  )
}

export default Products
