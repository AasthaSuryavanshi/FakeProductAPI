import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {

    const [products] = useContext(productContext)
    const {search} = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);
  console.log(category);

  const [filteredProducts, setfilteredProducts] = useState(null)


  // const getCategoryProducts = async ()=>{
  //   try {
  //     const {data} = await axios.get(`/products/category/${category}`)
  //     setfilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(()=>{
    if(!filteredProducts || category =="undefined") setfilteredProducts(products)
    if (category != "undefined") {
      // getCategoryProducts()
      setfilteredProducts(products.filter( (p)=> p.category == category))
    }
  },[category,products])

    
    return products ?  (

    <>
    <Nav/>
    
    <div>
        <div className="main-container w-[80vw] h-[100vh]  bg-zinc-800 py-[5vh] flex items-center justify-start flex-col overflow-x-hidden overflow-y-auto">        
        <h1 className=' text-2xl text-zinc-200 font-semibold'>API Products</h1>
        <div className="cards-container w-[84%] grid-cols-4 gap-10 grid  mt-10">
            {filteredProducts && filteredProducts.map((p,i) =>(


                <Link to={`/prddeatils/${p.id}`} key={i} 
                className="cards py-2 w-[32vh] h-[39vh] mb-5 bg-white flex-shrink-0 rounded-lg flex items-center justify-start flex-col shadow-none hover:shadow-md shadow-transparent hover:shadow-white/40 scale-100 hover:scale-105 transition-all ease-linear">
                
                <div
                className="img-container w-[75%] h-[90%] bg-contain bg-no-repeat bg-center"
                style={{
                    backgroundImage:`url(${p.image})`
                }}>
                </div>

                <h1 className='mt-1 text-[15px] font-semibold text-center '>{p.title}</h1>
                </Link>
            ))}

        </div>

      </div>
    </div>
    </>
  ) : <Loading/>}


export default Home