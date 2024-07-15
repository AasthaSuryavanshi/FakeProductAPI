import axios from '../utils/axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Loadingdetails from './Loadingdetails';
import { productContext } from '../utils/Context';

const Details = () => {
    const [products] = useContext(productContext)
    const [product, setproduct] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate()


    // const getsingleproduct = async () =>{
    //     try {
    //         const {data} = await axios.get(`/products/${id}`)
    //         console.log(data);
    //         setproduct(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
    //   getsingleproduct();
    if(products){
        setproduct(products.filter((p) => p.id == id)[0])
    }
    
    }, [])
    
    const deleteHandler = (id)=>{
        const notdeleteprd = products.filter((p)=> p.id !== id)
        setproducts(notdeleteprd);
        localStorage.setItem("products", notdeleteprd)
        navigate('/')
    }

  return  product ? (
    <div className=' w-[100vw] h-[100vh] bg-zinc-800 flex items-center justify-center'>

        <div className="details-container w-[70%] h-[80%] bg-white flex items-center  scale-100 hover:scale-105 transition-all ease-linear justify-center rounded-2xl cursor-pointer shadow-none hover:shadow-lg shadow-transparent hover:shadow-white/40">


            <div className="prdImage w-[50%] h-full  px-[5vh] py-[5vh]">
                <img className=' w-full h-full object-contain'
                 src={`${product.image}`} alt="" />                                                                           
            </div>


            <div className="prdDesc w-[50%] h-full   px-[8vh] py-[12vh]">
                <h1 className=' font-semibold text-4xl text-zinc-800 mb-1'>{product.title}</h1>
                <h1 className='text-md text-zinc-400 mb-4 font-semibold'>[{product.category}]</h1>
                <h1 className='text-xl font-bold text-zinc-800 mb-3'> &#8377;  {product.price}</h1>
                <p className='w-[95%] text-[15px] text-zinc-800 mb-7'>{product.description}</p>
                <span className='flex gap-5 items-center'> 
                <button className=' border-2 border-yellow-300 rounded-xl px-4 py-1 text-yellow-500 font-bold shadow-none hover:shadow-lg shadow-transparent hover:shadow-yellow-200'>Rating - {product.rating.rate}</button>
                <h1 className=' text-blue-500 font-semibold text-sm drop-shadow-none hover:drop-shadow-lg shadow-transparent hover:shadow-blue-300'>{product.rating.count}+ buyers</h1>
                </span>

                <div className="updates">
                    <button onClick={()=> deleteHandler(product.id)}>Delete</button>
                    {/* <button onClick={()=> updateHandler(product.id)}>Update</button> */}

                </div>
            </div>
        </div>

    </div>
  ) : <Loadingdetails/>
}

export default Details