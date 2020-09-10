import { createStore } from 'redux'
import moviesReducer from './redux/moviesReducer'
//Always use redux with the devTools. 
import { devToolsEnhancer } from 'redux-devtools-extension'

export default createStore(moviesReducer, devToolsEnhancer())