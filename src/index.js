import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import configureProductsStore from './store/store'
import App from './App'
import './index.css'

configureProductsStore()

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
