import {memo} from 'react'
import {useCustomStore} from '../../store/customStoreHook'
import Card from '../UI/Card'
import './ProductItem.css'

// wrap in memo so no re-rendering if props don't change
const ProductItem = memo(({prod: {id, title, description, isFavorite}}) => {
  console.log('Rendering <ProductItem />')

  // do not set up listener for this component
  const dispatch = useCustomStore(false)[1]

  const toggleFavHandler = () => dispatch('TOGGLE_FAV', id)
  
  return (
    <Card style={{marginBottom: '1rem'}}>
      <div className='product-item'>
        <h2 className={isFavorite ? 'is-fav' : ''}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFavorite ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {isFavorite ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  )
})

export default ProductItem
