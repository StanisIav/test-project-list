import React, { useEffect, useMemo, useRef, useState } from "react";
import MyButton from "../components/Form/MyButton";
import "../style/App.css";
import FormPost from "../components/FormPost";
import PostList from "../components/PostList";
import Sorting from "../components/Sorting";
import TableSort from "../components/TablSort";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/MyModal/MyModal";
import {usePostsFilt} from "../components/hooks/usePostsFilt";
import PostServise from "../API/PostServise";
import MyLoader from "../components/Form/MyLoader";
import { useFetching } from "../components/hooks/useFetching";
import { PageCount } from "../utilit/PageCount";
import { setPagination } from "../utilit/PageCount";
import Pagination from "../pagination/Pagination";
import { useObcerver } from "../components/hooks/useObcerver";
import PostSort from "../components/PostSort";

function Posts() {
    const [postu, setPostu] = useState([]);
    const LimitChange = useRef(false);
  
    const createPost = (newPost) => {
      setPostu([...postu, newPost]);
      setState(false)
    };
  
    const newRemove = (post) => {
      setPostu(postu.filter((p) => p.id !== post.id));
    };
    
    let observer = useRef();
    const lastObj = useRef();

//////////////////*useState*//////////////////    
    const [filterNew, setFilterNew] = useState({ sort: "", filter: "" }); 
    const [state, setState] = useState(false);  
    const [totalCaunt, setTotalCaunt] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [Page, setPAge] = useState(1);
    const [AllObjeck, setAllOdjeck] = useState()
//////////////////*useState*//////////////////    

    const postingSortANDSerch = usePostsFilt(postu, filterNew.sort, filterNew.filter);


//////////////////*useFetching*//////////////////
    const [zaproc, loading, error] = useFetching( async () => {var data = await PostServise.service(limit, page);
      console.log('1LIMITchange - ', LimitChange)
      if(LimitChange.current == false){
        setPostu([...postu, ...data.data])
      }
      if(LimitChange.current == true){
        setPostu(data.data)
      }
      const headerTotCount = data.headers['x-total-count']
      setTotalCaunt(PageCount(headerTotCount, limit))
      console.log(data.headers['x-total-count'])
      console.log(zaproc)
      LimitChange.current = false
    })
//////////////////*useFetching*//////////////////     


//////////////////*Intersection Observer API*//////////////////
useObcerver(lastObj, loading, page < totalCaunt, () => {
  setPage(page + 1)
});
//////////////////*Intersection Observer API*//////////////////    


//////////////////*totalCaunt*////////////////// 
    console.log(totalCaunt)
    const masivNumberPaginationMemo = useMemo(() => {
      let masivNumberPagination = setPagination(totalCaunt);
      return masivNumberPagination;
    },[totalCaunt]);
//////////////////*totalCaunt*//////////////////     

      useEffect(() => {
      zaproc(limit, page);
      console.log('1');
      },[page]);

      useEffect(() => {
        if(page > 1){
        setPage(1);
        LimitChange.current = true;
        }
        if(page == 1){
          LimitChange.current = true;
          console.log('2')
          zaproc(limit, page);
          console.log('2LIMITchange - ', LimitChange)
        }
      },[limit]);
  
  if (0 == false) {
    console.log('YES')
  } else {
    console.log('NO')
  }
  
  const i = 5;
  
  const proverkaError = 
    loading == 0 && error;
  const proverkaLoading =
    error == 0 && loading;  
 

    console.log('limit - ', limit)

    return (
      <div className="App">     
        {i}
        <Sorting
          sorting={[
            { name: "1" },
            { name: "2" },
            { name: "3" },
            { name: "3" },
            { name: "3" },
          ]}
        />
  
        <TableSort />
  
        <MyButton onClick={() => setState(true)}>
          Создать пост  
        </MyButton> 
  
        <MyModal state={state} setState={setState}>
          <FormPost create={createPost} />
        </MyModal>
  
        <PostFilter filterNew={filterNew} setFilterNew={setFilterNew} /> 

        <PostSort
        value={limit}
        onChange={lim => setLimit(lim)}
        defaultSort="Лимит"
          options={[
            { value: 10, name: "10" },
            { value: 15, name: "15" },
            { value: 25, name: "25" },
            { value: 40, name: "40" },
            { value: 100, name: "Показать всё" },
          ]}
        />     

        {proverkaError && 
          <h3>{error}</h3>
        }
          <PostList postuu={postingSortANDSerch} remove={newRemove} /> 
        {proverkaLoading &&
          <div style={{display: 'flex', justifyContent: 'center'}} ><MyLoader/></div>
        }  
        <div ref={lastObj} style={{width: '100%', height: '1px'}}></div>
       
        
        <Pagination AllNum={masivNumberPaginationMemo} SetObj={setPage} Obj={page}/> 
        
      </div>
    );
  }
  
  export default Posts;
  
  