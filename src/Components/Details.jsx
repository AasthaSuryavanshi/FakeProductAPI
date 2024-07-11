import React from 'react'

const Details = () => {
  return (
    <div className=' w-[100vw] h-[100vh] bg-zinc-800 flex items-center justify-center'>

        <div className="details-container w-[70%] h-[80%] bg-white flex items-center justify-center rounded-2xl cursor-pointer shadow-none hover:shadow-lg shadow-transparent hover:shadow-white/40">


            <div className="prdImage w-[50%] h-full  px-[5vh] py-[5vh]">
                <img className=' w-full h-full object-contain'
                 src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>


            <div className="prdDesc w-[50%] h-full   px-[8vh] py-[12vh]">
                <h1 className=' font-semibold text-4xl text-zinc-800 mb-1'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                <h1 className='text-md text-zinc-400 mb-4 font-semibold'>[men's clothin]</h1>
                <h1 className='text-xl font-bold text-zinc-800 mb-3'> &#8377;  109.95</h1>
                <p className='w-[95%] text-[15px] text-zinc-800 mb-7'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <span className='flex gap-5 items-center'> 
                <button className=' border-2 border-yellow-300 rounded-xl px-4 py-1 text-yellow-500 font-bold shadow-none hover:shadow-lg shadow-transparent hover:shadow-yellow-200'>Rating - 3.9</button>
                <h1 className=' text-blue-500 font-semibold text-sm drop-shadow-none hover:drop-shadow-lg shadow-transparent hover:shadow-blue-300'>120+ buyers</h1>
                </span>
            </div>
        </div>

    </div>
  )
}

export default Details