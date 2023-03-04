import React from 'react';

const RecentEpisodes = () => {
    return (
        <div className='container mx-auto mt-32'>
            <h1 className='font-bold text-2xl leading-9'>Recent Episodes</h1>
            <div className='flex justify-between mt-16'>
                <div>
                    <p className='leading-6 text-base font-normal text-black mt-4'>Apparently we had reached a great height in the <br /> atmosphere, for the sky was a dead black.</p>
                </div>
                <div>
                    <button className='bg-blue-800 font-medium text-base leading-6 h-12 w-48 text-white'>See All Episodes</button>
                </div>
            </div>
        </div>
    );
};

export default RecentEpisodes;