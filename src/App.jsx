import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/child1'
import Child2 from './components/child2'

let list = new Set()

function App() {
  console.log("App renders")
  const [num,setNum] = useState(10)
  const [count, setCount] = useState(0)
  //const form = count +1
  const form =useMemo(()=>count+1,[count])
  /*const countUp = ()=> {
     setCount(count+1)
  } */
 const countUp = useCallback(()=>{
  setCount(count+1)
 },[count])
 
  list.add(countUp)
  console.log(list.size)

  return <>
    <h2>count{num}</h2>
    <button onClick={()=>setNum(num+1)}>Up</button>
    <Child1 />
    <Child2 />
  </>
}

export default App
