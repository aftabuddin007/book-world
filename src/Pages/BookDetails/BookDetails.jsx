import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { addToStoreDB } from '../../Utilities/AddToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBooks = data.find(book=>book.bookId === bookId);
    console.log(singleBooks)
    const{bookName,author,category,image,review,tags,totalPages,
yearOfPublishing,rating,
publisher
}=singleBooks ||{};
const handleAddToRead = id=>{
  addToStoreDB(id)

MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})



}

    return (
        <div className="card flex justify-between  shadow-sm mb-4 p-7">
  <figure className='p-15 bg-[#1313130D]'>
    <img className='h-[550px]'
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <div className='border-1-b border-b border-gray-300 mb-2'>
        <h2 className="card-title text-5xl">{bookName}</h2>
    <p>By: {author}</p>
    </div>
    <p><span className='font-bold '> Category:</span> {category}</p>
    <p><span className='font-bold'>Review:</span> {review}</p>
    
    <div className='border-1-b border-b border-gray-300'>
        <span className='font-bold text-black flex'>Tags: {
        tags.map((tag)=><p className='text-green-400' key={bookId} > {tag}</p>)
    }</span>
    </div>
    <div className='border-1-b border-b border-gray-300 '>
        <p><span className='font-bold'>Number of Pages:</span> {totalPages}</p>
    <p><span className='font-bold '>Publisher:</span> {publisher}</p>
    <p><span className='font-bold'>Year of Publishing:</span> {yearOfPublishing}</p>
    <p><span className='font-bold'>Rating:</span> {rating}</p>
    </div>
    <div className="card-actions ">
      <button onClick={()=>handleAddToRead(id)} className="btn ">Read</button>
      <button className="btn btn-primary">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;