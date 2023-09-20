import React from 'react'
import Cards from './Cards'
import data from '../../../pages/homepage/data.json'

const Section_5 = () => {
    const sectionData = data.homepage.section_5
    return (
        <div>
            <div className='flex text-3xl font-semibold justify-center mt-20'>
                Online Shop Highlights
            </div>
            <div className='flex'>
                <div className='grid grid-flow-col mt-10 overflow-y-auto'>
                    {sectionData.map((product, index) => (
                        <Cards
                            key={index}
                            productImage={product.productImage}
                            productName={product.productName}
                            productDescription={product.productDescription}
                            productCategory={product.productCategory}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section_5