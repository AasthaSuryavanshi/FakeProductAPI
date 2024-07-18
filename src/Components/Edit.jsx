import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const Edit = () => {

    
    const [products , setproducts] = useContext(productContext)
        const navigate = useNavigate()
            const { id } = useParams()
            const [product, setproduct] = useState({
                title:"",
                image:"",
                price: "",
                category:"",
                description:"",
                rating:{rate:"",count:""}
            })
            const changeHandler = (e) => {
                setproduct({...product, [e.target.name]: e.target.value})
            }
            
            // const [rating, setrating] = useState({rate:"",count:""})
        
        useEffect(() => {
          setproduct(products.filter((p)=> p.id == id)[0])
        
        }, [id])

        
        
        
        const submitHandler = (e)=>{
            e.preventDefault();
            if(
                    product.title.trim().length < 5 ||
                    product.image.trim().length < 1 ||
                    product.category.trim().length < 5 ||
                    product.price.trim().length < 1 ||
                    product.description.trim().length < 5       
                    
                ){
                    alert("every input must have at least 4 characters");
                    return
                }

                const pi = products.findIndex((p)=> p.id == id)
                const copyData = [...products]
                copyData[pi] = {...products[pi], ...product}
        
                console.log(copyData);
                
                setproducts(copyData);
                localStorage.setItem("products", JSON.stringify(copyData))
                console.log(product);
                navigate(-1)
                toast.success("Product Updated Success")                
                

            }       
            


  return (
<div className=' w-[100vw] h-[100vh] bg-zinc-800 flex items-center justify-center'>
        <div className="form-container w-[60%] h-[80%] py-[4vh] bg-zinc-800 hover:bg-zinc-700 border-2 text-center border-white  scale-100 hover:scale-[1.2px] transition-all ease-linear rounded-2xl cursor-pointer shadow-none hover:shadow-lg shadow-transparent hover:shadow-white/40">
        <h1 className=' text-xl text-zinc-200 font-semibold'>Edit Product Details</h1>

        <form action="" method="post" onSubmit={submitHandler} className='flex items-center  justify-start flex-col'>
            <input 
            type="text"
            placeholder='Enter Title'
            className=' mb-5 w-[60vh] mt-8 px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={changeHandler}
            name='title'
            value={product && product.title} />

            <input 
            type="url"
            placeholder='Enter Image URL'
            className=' mb-5 w-[60vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={changeHandler}
            name='image'
            value={product && product.image} />

            <div className=' flex gap-5'>
            <input 
            type="text"
            placeholder='Enter Category'
            className=' mb-5 w-[30vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={changeHandler}
            name='category'
            value={product && product.category} />

            <input 
            type="number"
            placeholder='Enter Price'
            className=' mb-5 w-[27vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={changeHandler}
            name='price'
            value={product && product.price} />
            </div>

            <textarea 
            placeholder='Enter Description'
            className=' mb-5 w-[60vh] h-[30vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500 '
            onChange={changeHandler}
            name='description'
            value={product && product.description}>

            </textarea>

            <div className=' flex gap-5'>
            <input 
            type="number"
            placeholder='Enter rating'
            className=' mb-5 w-[30vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={changeHandler}
            name='rate'
            value={product && product.rating.rate} />

            <input 
            type="number"
            placeholder='Enter No of buyers'
            className=' mb-5 w-[27vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={changeHandler}
            name='count'
            value={product && product.rating.count} />
            </div>

            <button type="submit" 
            className=' border-2 border-green-300 rounded-xl px-4 py-1 text-green-500 font-bold shadow-none hover:shadow-md shadow-transparent hover:shadow-green-400'>
            Edit Details
            </button>
            
        </form>
        </div>
    </div>  )
}

export default Edit