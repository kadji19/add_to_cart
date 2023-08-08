import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './pagination.css'
import data from '../data'

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.user.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.user.length/ recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const prePage = () =>{
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () =>{
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
    }
/*     const [data, setData] = useState([]) 
    const [itemsPerPage, setItemsPerPage] = useState(5)

    const pages =[];
    for (let i = 1; i<= Math.ceil(data.length/itemsPerPage); i++){
        pages.push(i);  
    }

    
    const renderData = (data)=> {
        return(
            <ul>
                {data.map((todo, index)=>{
                    return <li key={index}>{todo.title}</li>;
                })}
            </ul>
        )
    }
    const renderPageNumbers = pages.map((number)=>{
        return(
            <li key={number} id={number}>{number} </li>
        );
    });

    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => setData(json));
      }, []); */
  return (
    <div className='d-flex flex-column justify-content-center align-items-center text-center bg-dark '>
        <h2>My List</h2> <br /> 
        <div className="table-responsive ">
        <table className='table align-items-center table-flush'>
            <thead className="thead-light">
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {records.map((d, i)=>{
                    return(
                        <tr key={i}>
                        <td>{d.id} </td>
                        <td>{d.name} </td>
                        <td>{d.email} </td>
                    </tr>
                    )
                })
                }
            </tbody>
        </table>
        
        </div>
        <div className="card-footer">
            <div className="float-right">
              <div className="col-sm-12 col-md-7">
                    <nav >
                      <ul className="pagination">
            
                        <li className="page-item "><a className="page-link" onClick={prePage}>Prec.</a></li>
                        { numbers.map((page, index)=>{
                            return(
                                <li className={`page-item ${currentPage === page ? 'active' : '' } `}  key={index}><a  onClick={()=> setCurrentPage(page)} className="page-link">{page}</a></li>
                            )
                        })}

                        <li className="page-item"onClick={nextPage}><a  className="page-link">Suiv.</a></li>
                      </ul>
                    </nav>
              </div>
            </div>
          </div>
    </div>
  )
}
