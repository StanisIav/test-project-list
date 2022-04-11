import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Error from "./Error";
import MyLoader from "../components/Form/MyLoader";
import { useFetching } from "../components/hooks/useFetching";
import PostServise from "../API/PostServise";

const Post = () => {
    const {id} = useParams();
    const [posuNav, setPostuNav] = useState({});
    const [posuCom, setPostuCom] = useState([]);
    
    const[dataZaprosa, ISLoading, ErrorZapros] = useFetching( async () => {
        const FetchZapros = await PostServise.ZaprosID(id)
        setPostuNav(FetchZapros.data)
    })

    const[ComdataZaprosa, ComISLoading, ComErrorZapros] = useFetching( async () => {
        const ComFetchZapros = await PostServise.ComZaprosID(id)
        setPostuCom(ComFetchZapros.data)
    })

    useEffect(async () => {
        dataZaprosa(id)
        ComdataZaprosa(id)
    },[])


    return(
       <div style={{marginLeft: '200px'}}>
           {ISLoading
            ?   <div style={{display: 'flex', justifyContent: 'center'}} ><MyLoader/></div> 
            :   <div>  
                    <h1>{posuNav.title}</h1><br/>
                    <h4>{posuNav.body}</h4> 
                </div>   
           }

           <div>
                <h1>Комментарии:</h1><br/>
            </div>

           {ComISLoading
            ?   <div style={{display: 'flex', justifyContent: 'center'}} ><MyLoader/></div> 
            :   <div>
                    {posuCom.map(com => 
                        <div key={com.body}><h3>{com.email}</h3><br/><h5>{com.body}</h5></div>
                    )}
                </div>   
           }

           {ErrorZapros &&
            <Error/>
           }
           {ComErrorZapros &&
            <Error/>
           }
       </div>
    );
}

export default Post