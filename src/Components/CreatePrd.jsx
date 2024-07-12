import React, { useContext, useState } from 'react'
import { productContext } from '../utils/Context'

const CreatePrd = () => {

    const [products , setproducts] = useContext(productContext)

    const [title, settitle] = useState(null)
    const [image, setimage] = useState(null)
    const [category, setcategory] = useState(null)
    const [price, setprice] = useState(null)
    const [description, setdescription] = useState(null)



    const submitHandler = (e)=>{
        e.preventDefault();
        if(
            title.trim().length < 5 ||
            image.trim().length < 5 ||
            category.trim().length < 5 ||
            price.trim().length < 1 ||
            description.trim().length < 5 
        ){
            alert("every input must have at least 4 characters");
            return
        }
        const product = {
            title,image,category, price,description
        }
        setproducts([...products,product]);
        console.log(products);
        console.log(product);

    }

  return (
    <div className=' w-[100vw] h-[100vh] bg-zinc-800 flex items-center justify-center'>
        <div className="form-container w-[60%] h-[80%] py-[4vh] bg-zinc-800 hover:bg-zinc-700 border-2 text-center border-white  scale-100 hover:scale-[1.2px] transition-all ease-linear rounded-2xl cursor-pointer shadow-none hover:shadow-lg shadow-transparent hover:shadow-white/40">
        <h1 className=' text-xl text-zinc-200 font-semibold'>Create New Product</h1>

        <form action="" method="post" onSubmit={submitHandler} className='flex items-center  justify-start flex-col'>
            <input 
            type="text"
            placeholder='Enter Title'
            className=' mb-5 w-[60vh] mt-8 px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={(e)=>settitle(e.target.value)}
            value={title} />

            <input 
            type="url"
            placeholder='Enter Imange URL'
            className=' mb-5 w-[60vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={(e)=>setimage(e.target.value)}
            value={image} />

            <div className=' flex gap-5'>
            <input 
            type="text"
            placeholder='Enter Category'
            className=' mb-5 w-[30vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={(e)=>setcategory(e.target.value)}
            value={category} />

            <input 
            type="number"
            placeholder='Enter Price'
            className=' mb-5 w-[27vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={(e)=>setprice(e.target.value)}
            value={price} />
            </div>

            <textarea 
            placeholder='Enter Description'
            className=' mb-5 w-[60vh] h-[30vh]  px-6 py-1 rounded-lg text-white outline-none placeholder:text-white font-thin bg-zinc-500'
            onChange={(e)=>setdescription(e.target.value)}
            value={description}>

            </textarea>
            <button type="submit"
            className=' border-2 border-green-300 rounded-xl px-4 py-1 text-green-500 font-bold shadow-none hover:shadow-md shadow-transparent hover:shadow-green-400'>
                Add Product</button>
            
        </form>
        </div>
    </div>
  )
}

export default CreatePrd