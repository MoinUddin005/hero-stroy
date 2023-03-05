import React from 'react';
import Image from "../../../public/images/Image.png"
import Icon from "../../../public/images/Icon.png"
import Image1 from "../../../public/images/Image (1).png"
import Image2 from "../../../public/images/Image (2).png"
import MaskGroup from "../../../public/images/Mask Group.png"
import gadgets from "../../../public/images/top-view-of-assorted-gadgets-on-desk-3568520.png"
import bitcoins from "../../../public/images/bitcoins-and-u-s-dollar-bills-730547.png"

const RecentEpisodesCard = () => {
    return (
        <div className='container mx-auto grid  justify-items-center grid-cols-3 mt-16'>
            <div >
                <div>
                    <img  src={Image} alt="" />
                    <p className='font-semibold text-2xl leading-8 mt-8'>Ep 1: How to build a world-class <br /> business brand</p>
                    <p className='mt-5'>
                        Lorem ipsum at vero eos et accusam et justo duo <br /> dolores et ea rebum.
                    </p>

                </div>
                <div className='flex items-center mt-5'>
                    <img  src={Icon} alt="" />
                    <p className='ml-2 text-blue-800'>Listen Now</p>
                </div>
            </div>

            <div >
                <div>
                    <img  src={Image1} alt="" />
                    <p className='font-semibold text-2xl leading-8 mt-8'>Ep 2: Getting the first 100 <br /> customers for your business</p>
                    <p className='mt-5'>
                        Lorem ipsum at vero eos et accusam et justo duo <br /> dolores et ea rebum.
                    </p>

                </div>
                <div className='flex items-center mt-5'>
                    <img  src={Icon} alt="" />
                    <p className='ml-2 text-blue-800'>Listen Now</p>
                </div>
            </div>

            <div className='mb-28'>
                <div>
                    <img  src={Image2} alt="" />
                    <p className='font-semibold text-2xl leading-8 mt-8'>Ep 3: Should I raise money for my <br /> startup, or not?</p>
                    <p className='mt-5'>
                        Lorem ipsum at vero eos et accusam et justo duo <br /> dolores et ea rebum.
                    </p>

                </div>
                <div className='flex items-center mt-5'>
                    <img  src={Icon} alt="" />
                    <p className='ml-2 text-blue-800'>Listen Now</p>
                </div>
            </div>

            <div className='bg-slate-100'>
                <div>
                <p className='font-semibold text-2xl leading-8 pt-10 pl-10'>Read our <br /> 
                        articles & news</p>
                        <p className='text-blue-800 pt-10 pl-10'>See More</p>
                    <img className='-ml-1 pt-10' src={MaskGroup} alt="" />
                    

                </div>
                
            </div>

            <div >
                <div>
                    <img  src={bitcoins} alt="" />
                    <p className='font-semibold text-2xl leading-8 mt-8'>Getting the first 100 customers for <br /> your business</p>
                    <p className='mt-5'>
                        Lorem ipsum at vero eos et accusam et justo duo <br /> dolores et ea rebum.
                    </p>

                </div>
                <div className=' mt-5'>
                    
                    <p className='ml-2 text-blue-800'>Read Now</p>
                </div>
            </div>

            <div >
                <div>
                    <img  src={gadgets} alt="" />
                    <p className='font-semibold text-2xl leading-8 mt-8'>Apparently we had reached a great <br /> height in the atmosphere, ...</p>
                    <p className='mt-5'>
                        Lorem ipsum at vero eos et accusam et justo duo <br /> dolores et ea rebum.
                    </p>

                </div>
                <div className=' mt-5'>
                    
                    <p className='ml-2 text-blue-800'>Read Now</p>
                </div>
            </div>

           
        </div>
    );
};

export default RecentEpisodesCard;