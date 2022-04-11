import React, {useState} from 'react';

const Sorting = (props) => {
        const products = props.sorting;
        let sortedProducts = [...products];
        sortedProducts.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        return (
          <div>
              <ul>
                  {sortedProducts.map(sorti => 
                    <li key={sorti.toString()}>{sorti.name}</li>
                    )}
              </ul>
          </div>
        );
}

export default Sorting;