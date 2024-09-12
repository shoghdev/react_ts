import { useReducer } from 'react'
import './App.css'
import { Dashboard } from './components/dashboard'
import { reducer } from './reducer'
import { initialState, ProductContext } from './context'

export default function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return <>
    <ProductContext.Provider value={{state, dispatch}}>
      <Dashboard />
    </ProductContext.Provider>
  </>
}

