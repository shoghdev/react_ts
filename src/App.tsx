import { useReducer } from 'react'
import './App.css'
import { AddUser } from './components/adduser'
import { UserList } from './components/userlist'
import { reducer } from './reducer'
import { initialState, UserContext } from './context'

export default function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return <>
    <UserContext.Provider value={{state,dispatch}}>
      <AddUser />
      <UserList />
    </UserContext.Provider>
  </>
}
