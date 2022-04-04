import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteSlice from './reducers/anecdoteSlice'


export const store = createStore(anecdoteSlice)


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
store.subscribe(() => console.log(store.getState()))