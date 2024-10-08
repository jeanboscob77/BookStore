import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import CreateBook from './Components/createBook';
import UpdateBook from './Components/updateBook';
import DeleteBook from './Components/deleteBook';
import BookDetail from './Components/bookDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create/book' element={<CreateBook/>}/>
        <Route path='/update/book/:id' element={<UpdateBook/>}/>
        <Route path='/delete/book/:id' element={<DeleteBook/>}/>
        <Route path='/show/book/:id' element={<BookDetail/>}/>
      </Routes>
    </div>
  )
}

export default App