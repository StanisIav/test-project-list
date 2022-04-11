import React, {useState} from 'react';
import MyInput from './Form/MyInput';
import PostSort from './PostSort';

const PostFilter = ({filterNew, setFilterNew}) => {
    
    return (
      <div>  
        <MyInput
        value={filterNew.filter}
        onChange={e => setFilterNew({...filterNew, filter: e.target.value})}
        placeholder={'Поиск...'}
      />

      <PostSort
        value={filterNew.sort}
        onChange={sortin => setFilterNew({...filterNew, sort: sortin})}
        defaultSort="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
     </div> 
    );    

};

export default PostFilter;