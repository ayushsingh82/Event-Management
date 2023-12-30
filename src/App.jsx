import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import EventList from './pages/EventList/EventList'
import FilterEvent from './pages/FilterEvent/FilterEvent'
import EventDetails from './pages/EventDetails/EventDetails'

const router=createBrowserRouter([
  {path:'/',element:<EventList/>},
  {path:'/find-events',element:<FilterEvent/>},
  {path:'/events/:id',element:<EventDetails/>},
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
