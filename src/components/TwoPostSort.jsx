import React, { useState } from 'react';

const TwoPostSort = ({ options, defaultSort, value, createSort}) => {

    const [ValueSort, setValueSort] = useState('');
    
       function CreateNeWsoRb() {
        const NewSort = {...ValueSort}
    
        createSort(NewSort);
    
        console.log(NewSort);
    } 
    

    return (
        <div style={{ margin: '5px 0px 30px 0px' }}>
            <select 
            value={value}
            onChange={e => setValueSort(e.target.value)}
            onChange={CreateNeWsoRb}
            >
                <option disabled value="">{defaultSort}</option>
                {options.map(option =>
                    <option key={option.toString()} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    );

};

export default TwoPostSort;