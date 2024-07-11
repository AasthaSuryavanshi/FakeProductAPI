import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className="nav w-[20vw] h-[100vh] bg-zinc-800/90 text-white flex items-center justify-start flex-col py-[5vh]">
        <a href="/create">
        <button 
        className=' px-5 rounded-lg py-1 text-zinc-200 bg-zinc-600 cursor-pointer hover:bg-zinc-500 shadow shadow-zinc-200 mb-10'>
           Add Product
           </button>
         </a>
         
        <h1 className=' text-2xl w-[80%] border-t-[0.7px] border-zinc-500 text-zinc-200 font-semibold'>Categories</h1>

        <ul className='w-[50%] mt-4'>
          <li className='mb-2'>
            <span className=' w-[12px] h-[12px] bg-yellow-200 rounded-full inline-block mr-2'></span>Bikinis
          </li>

        </ul>

      </div>
    </div>
  )
}

export default Nav