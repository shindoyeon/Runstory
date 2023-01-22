import React from 'react';
import './Filter.css';

const FilterName = (props) => {
    return (
        <div className='filter-box'>
            <p className='filter'>{props.name}</p>
        </div>
    );
}

export default FilterName;