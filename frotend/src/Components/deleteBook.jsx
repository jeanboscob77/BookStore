import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {


    const {id} = useParams()
    const navigate = useNavigate()

    const handleDeleteBook = ()=>{
    axios.delete(`http://localhost:5000/books/${id}`).then((res)=>{
     if(res.data){
    navigate('/')
     }
    }).catch((error)=>console.log(error)
    )
    }

  return (
    <div className='container  pt-5 mt-5'>
    <div className='w-100 mx-auto'>
      <h1 className='fs-4 d-flex justify-content-center'>Are you Sure you want to delete this Book?</h1>
      <div className='d-flex justify-content-center'>
      <button className=' bg-danger text-light fs-4 w-25 rounded-md'
      onClick={handleDeleteBook}>Yes delete book</button>
      </div>
    
      </div>
    </div>
  )
}

export default DeleteBook
