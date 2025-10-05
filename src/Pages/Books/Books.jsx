import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    //  const [allBooks, setAllBooks] =useState([]);
    //  useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setAllBooks(data)
    //     })
    //  },[])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center p-6'>Books</h1>
            {
                data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
            }
        </div>
    );
};

export default Books;