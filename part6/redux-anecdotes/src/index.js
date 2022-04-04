import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'

const store = createStore(reducer)



const render = () => {
  ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render) 