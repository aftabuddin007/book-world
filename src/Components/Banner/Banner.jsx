import React from 'react';
import banImg from "../../assets/source_pngwing.png"
const Banner = () => {
    return (
        <div className='flex justify-between items-center p-15 gap-6 bg-[#1313130D]'>
            <div>
                <h1 className='font-bold text-5xl'>Books to freshen up <br /> your bookshelf</h1>
                <button className='px-3 py-2 bg-green-500 mt-7 rounded-xl text-white'>View The List</button>
            </div>
            <div>
                <img src={banImg} alt="" className='h-[300px] w-[300px]'/>
            </div>
        </div>
    );
};

export default Banner;