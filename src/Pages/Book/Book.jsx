import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';
const Book = ({singleBook}) => {
    console.log(singleBook)

    const{bookName,author,bookId,category,image,rating,tags}=singleBook

    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className=''> 
        <div className="card  w-96 shadow-lg p-3 border-1">
  <figure className='bg-[#F3F3F3] p-3 rounded-lg'>
    <img
      src={image} className='h-[150px] w-[full] '
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between'>
    {
        tags.map((tag)=><p className='text-green-400' > {tag}</p>)
    }
    </div>
    <h2 className="card-title">{bookName}</h2>
    <p>{author}</p>
    <div className="card-actions flex justify-between">

      <div className="badge badge-outline">
<p>{category}</p>
      </div>
      <div className=" badge-outline gap-4 flex">
        <span>{rating}</span>
        <span><CiStar /></span>
      </div>
    </div>
  </div>
</div></div>
        </Link>
    );
};

export default Book;