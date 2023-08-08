import React from 'react'
import ItemsCart from './ItemsCart'
import data from '../data'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const [value, setValue] = useState("")

/*     const filterList = () =>{
        return list.filter(item =>filterField(item).toLowerCase().includes(value.toLocaleLowerCase()))
    } */

    const handleChange =(e)=>{
        setValue(e.target.value)
/*         setList(filterList) */
}
console.log(value)
/* 
    console.warn(data.productData) */
  return (
    <div>
        <section className='text-center mt-3'> 
            <form class="d-flex py-4 me-4 ms-4 "  role="search">
                <input onChange={handleChange} class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success ">
                <Link className='nav-link' to={"/pagination"} >Search</Link>
                </button>
            </form>
        </section>
        <div className='py-4 container '>
            <div className='row justify-content-center'>
                {data.productData.filter((item)=>{
                    return item.title.toLowerCase().includes(value.toLocaleLowerCase());
                }).map((item, index)=>{
                    return(
                        <ItemsCart img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Home