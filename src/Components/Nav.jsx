import { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {

  const [products] = useContext(productContext)
  

  const color = ()=>{
    return `rgba(${( Math.random() * 255 ).toFixed()}, ${( Math.random() * 255 ).toFixed()}, ${( Math.random() * 255 ).toFixed()}, 0.9)`
  }

  let distinct_catagory = products && products.reduce((acc,cv)=>[...acc,cv.category],[]);   //sare items ki category mil gyi in array form
  distinct_catagory = [...new Set(distinct_catagory)];   //array me se distict ategory nikal li

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

        <div className='w-[50%] h-full mt-4 leading-4 '>
          {distinct_catagory.map((c,i)=>(            
            
            <Link
            key={i}
            to={`/?category=${c}`} className='mb-2'>
            <span style={{backgroundColor:color()}} className=' w-[12px] h-[12px] rounded-full inline-block mr-2'></span>{c} <br /><br />
          </Link>

          ))}
          </div>

      </div>
    </div>
  )
}

export default Nav