import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserList } from './partials/userlist.tsx'
import { AddUser } from './partials/adduser.tsx'
import { UpdateUser } from './partials/updateuser.tsx'
import { User } from './partials/user.tsx'
import { Header } from './partials/header.tsx'

const router = createBrowserRouter([
  {
    path:"/", 
    element:<Header />,
    children:[
      {path:"", element:<UserList />},
      {path:"users/:id", element: <User />},
      {path:"users/add", element:<AddUser />},
      {path:"users/edit/user/:id", element:<UpdateUser />}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
