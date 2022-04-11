import React, {useState} from 'react';
import MockDate from '../components/MOCK_DATA.json';

const TableSort = function(){

    const [Mockdate, setMockdate] = useState(MockDate);

    const SortMassiv = (sor) => {
      const NewSort = [...Mockdate].sort((a, b) => a[sor].localeCompare(b[sor]));
      setMockdate(NewSort);
      console.log(sor);
    }


    const SortMassivvv = (sar) => {
      const IDNewSort = [...Mockdate].sort((a, b) => { 
        if(a[sar] > b[sar]){
          return 1;
        }
        if(a[sar] < b[sar]){
          return -1;
        }
      });
      setMockdate(IDNewSort)
    }

    return (
       <div>
           <table>
               <thead>
                 <tr>  
                   <th onClick={() => SortMassivvv('id')}>id</th>
                   <th onClick={() => SortMassiv('name')}>name</th>
                   <th onClick={() => SortMassiv('email')}>e-mail</th>
                   <th onClick={() => SortMassiv('ip')}>ip</th>
                 </tr>
               </thead>
               <tbody>
                  {Mockdate.map(mock => 
                  <tr key={mock.id}>
                      <td>{mock.id}</td>
                      <td>{mock.name}</td>
                      <td>{mock.email}</td>
                      <td>{mock.ip}</td>
                  </tr>  
                    )}
               </tbody>
           </table>
       </div> 
    );    

};

export default TableSort;