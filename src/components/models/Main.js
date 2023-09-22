import React from 'react'
import ModelsList from './ModelsList';
import FilterList from './FilterList';

const Main = () => {
    return (
        <div>
            <div className="text-4xl font-bold">Model overview</div>
            <div><FilterList /></div>

            <ModelsList />
        </div>
    )
}

export default Main