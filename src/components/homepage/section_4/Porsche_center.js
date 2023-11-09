import React from 'react'
import Button from './Button'

const Porsche_center = ({ img }) => {
    return (
        <div>
            <div className='flex text-[12px] text-slate-500 pt-4 justify-center'>
                *Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges. Dealer sets actual selling price.
            </div>
            <div className='flex m-32 h-full bg-[#0e0e12] text-white rounded-xl'>
                <div className='p-16 w-[500px]'>
                    <div className='text-2xl pb-2 font-extrabold'>
                        Porsche Model Selection
                    </div>
                    <div>
                        Experience the essence of Porsche design in model selection. Explore our refined selection for elevated projects with exquisite precision.
                    </div>
                    <Button text={'Search Now'} />
                </div>
                <img className='w-[620px] rounded-r-xl' src={img} alt="service" />
            </div>
        </div>
    )
}

export default Porsche_center
