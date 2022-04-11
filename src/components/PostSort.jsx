import React, { useState } from 'react';

const PostSort = ({ options, defaultSort, value, onChange}) => {


    return (
        <div style={{ margin: '5px 0px 30px 0px' }}>
            <select 
            value={value}
            onChange={event => onChange(event.target.value)}
            >
                <option disabled value="">{defaultSort}</option>
                {options.map(optionn =>
                    <option key={optionn.toString()} value={optionn.value}>
                        {optionn.name}
                    </option>
                )}
            </select>
        </div>
    );

};

export default PostSort;