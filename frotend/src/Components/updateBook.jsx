import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBook = () => {
const {id} = useParams()
const navigate = useNavigate()

const [title,setTitle] = useState('')
const [author,setAuthor] = useState('')
const [pages,setPages] = useState('')
const [publishedDate,setPublishedDate] = useState('')



useEffect(()=>{
    axios.get(`http://localhost:5000/books/${id}`).then((res)=>{
        
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPages(res.data.pages)
        setPublishedDate(res.data.publishedDate)
    }).catch((error)=>{
      console.log(error);
      
    })
   },[])




const handleUpdateBook = (event)=>{
    event.preventDefault();

    if(title.trim !==  ''&& author.trim() !== '' && pages !== '' && publishedDate.trim() !== ''){
        axios.put(`http://localhost:5000/books/${id}`,{title,author,pages,publishedDate}).then((res)=>{
            if(res.data){
             setTitle('')
             setAuthor('')
             setPages('')
             setPublishedDate('')
             navigate('/')
            }
         }).catch((error)=>{
           console.log(error);
      
         })
    }
    else{
       alert('please fill out all field!!')
       return;
    }
}

  return (
    <div>
        <form className='w-50 mx-auto'>
            <div className='my-3'>
            <label htmlFor='title' className='form-label'>Title:</label>
                <input type='text' className='form-control' placeholder='Enter book title'
                    value={title} onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className='mb-3'>
            <label htmlFor='author' className='form-label'>Author:</label>
                <input type='text' className='form-control' placeholder='Enter book author'
                    value={author} onChange={(e)=>setAuthor(e.target.value)}
                />
            </div>
            <div className='mb-3'>
            <label htmlFor='pages' className='form-label'>Pages:</label>
                <input type='number' className='form-control' placeholder='Enter number of pages'
                    value={pages} onChange={(e)=>setPages(e.target.value)}
                />
            </div>
            <div className='mb-3'>
            <label htmlFor='published date' className='form-label'>Published Date:</label>
              <input type='date' className='form-control' placeholder='published date'
                value={publishedDate} onChange={(e)=>setPublishedDate(e.target.value)}
              />
            </div>
            <div className='w-100 d-flex justify-content-center'>
            <div className='mx-auto'>
            <button className='btn btn-primary' onClick={handleUpdateBook}>Save</button>
            </div>
           
            </div>
          
        </form>
    </div>
  )
}

export default UpdateBook