import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import CreatePrd from './Components/CreatePrd'

const App = () => {

  const {search,pathname} = useLocation()
  console.log(search,pathname);
  return (
    <div className=' w-[100vw] flex items-center'>
      {(pathname !='/' || search.length > 0) && (        
        <Link
         to={'/'}
         className=' text-md text-blue-400 absolute top-10 right-10'>Back to Home</Link>
      )}        

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/create' element={ <CreatePrd/> } />
        <Route path='/prddeatils/:id' element={<Details/>} />
        

      </Routes>

      
      
  </div>
  )
}

export default App