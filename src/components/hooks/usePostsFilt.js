import {useMemo} from "react";

export const useSortPost = (postu, sort) => {
    
    const postingSort = useMemo(() => {
        if (sort) {
          return [...postu].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        } else {
          return postu;
        }
      }, [sort, postu]);
    
      return postingSort;
}


export const usePostsFilt = (postu, sort, filter) => {
  
  const postingSort = useSortPost(postu, sort);

  const postingSortANDSerch = useMemo(() => {
    return postingSort.filter((post) =>
      post.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, postingSort]);

  return postingSortANDSerch;
}

