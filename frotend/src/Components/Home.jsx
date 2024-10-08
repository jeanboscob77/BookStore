  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import { Link } from 'react-router-dom'
  import {MdEdit,MdDelete,MdDetails,MdOutlineAddBox} from 'react-icons/md'
  import { useNavigate } from 'react-router-dom'

 

  const Home = () => {
   const [books,setBooks] = useState([])
   const navigate = useNavigate()

    
   useEffect(()=>{
    axios.get('http://localhost:5000/books').then((res)=>{
        setBooks(res.data)
    }).catch((error)=>{
      console.log(error);
      
    })
   },[])
 
   console.log(books);
   
   const HandleAddBook = ()=>{
      navigate('/create/book')
   }


   return <div>

    <div className='container d-flex justify-content-end pt-4'>
    <MdOutlineAddBox  className='mx-5 fs-1 text-primary  rounded-md cursor-pointer'
      onClick={HandleAddBook}
    />
    </div>
    {
      books.length >0 ? (<div className='container'>
    <h1>Available books</h1>
        <table className='table table-bordered table-hover table-responsive'>
        <thead>
          <tr className='table-dark'>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Publish Year</th>
            <th>Posted date</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book,index)=>(
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>{ new Date(book.publishedDate).toLocaleString('en',{year:'numeric',month: '2-digit',day: '2-digit'})}</td>
              <td>{ new Date(book.createdAt).toLocaleString('en',{year:'numeric',month: '2-digit',day: '2-digit'})}</td>
              <td>
              <Link to={`/show/book/${book._id}`}>
              <MdDetails className='mx-2 fs-4 text-info cursor-pointer'/>
              </Link>
            <Link  to={`/update/book/${book._id}`}>
            <MdEdit  className='mx-2 fs-4 text-primary cursor-pointer'/>
            </Link>
            <Link  to={`/delete/book/${book._id}`}>
            <MdDelete className='mx-1 fs-4 text-danger cursor-pointer'/>
            </Link>
          
           
            </td>
            </tr>
            ))
          }
          </tbody>
        </table>
        </div>): <h1 className='text-center bg-danger w-50 mx-auto'>No Book Available in the store</h1>
    }
    
   </div>
  }
  
  export default Home