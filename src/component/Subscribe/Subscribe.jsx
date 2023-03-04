import React from 'react';

const Subscribe = () => {
    return (
        <div className='container mx-auto mt-24 grid gap-20 justify-items-center grid-cols-5 sm-grid-cols-1 '>
            <div className='flex items-center -ml-7'>
                <p className='font-bold text-base leading-9'>podcast Available on</p>
            </div>
            <div className='  flex items-center '>
                <img  src="../../../public/images/Vector.png" alt="" />
                <p className='w-32 ml-2 font-semibold'>Apple Podcasts</p>
            </div>
            <div className=' flex items-center'>
                <img  src="../../../public/images/Cloud.png" alt="" />
                <p className='w-32 ml-2 font-semibold uppercase'> soundCloud </p>
            </div>
            <div className=' flex items-center'>
                <img  src="../../../public/images/Lines.png" alt="" />
                <p className='w-32 ml-2 font-semibold'>Google Podcasts</p>
            </div>
            <div className=' flex items-center'>
                <img  src="../../../public/images/Vector (2).png" alt="" />
                <p className='w-32 ml-2 font-semibold'>Spotify</p>
            </div>
           
        </div>
    );
};

export default Subscribe;