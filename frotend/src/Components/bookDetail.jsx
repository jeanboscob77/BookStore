

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {

    const {id} = useParams()
    const [book,setBook] = useState({})

    useEffect(()=>{
     axios.get(`http://localhost:5000/books/${id}`).then((res)=>{
        setBook(res.data)
     }).catch((error)=>{
        console.log(error);
        
     })
    },[])
  console.log(book);


  const date = new Date()
  const year = date.getMonth() + 1  + '/' + date.getDate() + '/' + date.getFullYear()
  console.log(year - new Date(book.createdAt).toLocaleString('en',{year: 'numeric', month: '2-digit',day: '2-digit'}));
  
  
  return (
    <div className='pt-5'>
      <div className='card w-25 mx-auto p-3'>
      {year - book.createdAt < 10 &&<h5>recent</h5>}
        <h4>Title: {book.title}</h4>
        <p>Author: {book.author}</p>
        <p>Pages: {book.pages}</p>
        <p>Publish Year: {new Date(book.publishedDate)
        .toLocaleString('en',{year: 'numeric',month: '2-digit','day': '2-digit'})}</p>
        {
            book.pages > 500 && <div>
                Dear reader thank you for choosing this book from the many which are available in the bookstore.
                before get started to read let us give you an overview of what you are required to do. 
                this book was written for brave people like you, so do your best we are sure that you will enjoy
                and boost your knowledge to next level. good luck ❤️👍
            </div>
        }
        {
            book.pages <= 500 && book.pages >= 300 && <div>
                Dear reader thank you for choosing this book from the many which are available in the bookstore.
               We don't really know level you eager to read as much as you can but you are on the right track once
               you are reading this book. We hope it will help you to get where you expect too and you will keep
               to improve ad you will read different next time. Anyway congratulation 😘👌👌 keep up!!!
            </div>
        }
        {
            book.pages < 300 && <div>
                Hello Dear, we hope you are doing fine. We see how you are interested in reading book👍👍 
                You made great choice for sure. all you know is to keep it up and we really know that you'll
                find it more useful. please make sure that you read something new everyday because it is the one to
                improve your capacity for sure and you will do hard things we blieve in you 😊😊(❁´◡`❁)
            </div>
        }
      </div>
    </div>
  )
}

export default BookDetail
