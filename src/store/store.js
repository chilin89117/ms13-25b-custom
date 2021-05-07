import {initStore as initProductsStore} from './customStoreHook'

const initialProductsState = {
  products: [
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ]
}

const configureProductsStore = () => {
  const productsActions = {
    TOGGLE_FAV: (state, prodId) => {
      const prodIndex = state.products.findIndex(p => p.id === prodId)
      const newFavStatus = !state.products[prodIndex].isFavorite
      const updatedProducts = [...state.products]
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus
      }
      return {products: updatedProducts}
    }
  }

  initProductsStore(initialProductsState, productsActions)
}

export default configureProductsStore
