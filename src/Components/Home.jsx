import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <>
    <Nav/>
    
    <div>
        <div className="main-container w-[80vw] h-[100vh]  bg-zinc-800 py-[5vh] flex items-center justify-start flex-col overflow-x-hidden overflow-y-auto">        
        <h1 className=' text-2xl text-zinc-200 font-semibold'>API Products</h1>
        <Link to='/prddeatils/1' className="cards-container w-[84%] grid-cols-4 gap-10 grid  mt-10">

        <div className="cards w-[32vh] h-[39vh] mb-5 bg-white flex-shrink-0 rounded-lg flex items-center justify-start flex-col shadow-none hover:shadow-md shadow-transparent hover:shadow-white/40 scale-100 hover:scale-105 transition-all ease-linear">
          
          <div
          className="img-container w-[75%] h-[89%] bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage:'url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)'
          }}>
          </div>

          <h1 className='mt-1 text-[15px] font-semibold'>bag</h1>
        </div>







        </Link>

      </div>
    </div>
    </>
  )
}

export default Home