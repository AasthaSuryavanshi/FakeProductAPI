import axios from './axios';
import React, { createContext, useEffect, useState } from 'react'

export const productContext = createContext();           //context create


const Context = (props) => {
    const [product, setproduct] = useState(null)

    // const getProducts = async ()=>{
    //     try {
    //         const { data } = await axios("/products");
    //         setproduct(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(()=>{
    //     getProducts();
    // },[])


  return (
    <productContext.Provider value={[product, setproduct]}>
        {props.children}
    </productContext.Provider>
  )
}

export default Context