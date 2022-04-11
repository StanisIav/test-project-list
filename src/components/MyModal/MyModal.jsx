import React, {useState} from "react";
import cl from "../MyModal/MyModal.module.css"

const MyModal = ({children, state, setState}) => {

    const basicClass = [cl.GeneralBlock]
    
    if(state){
        basicClass.push([cl.active])
    }

 return(
    <div className={basicClass.join(' ')} onClick={() => setState(false)}>
        <div className={cl.MyBlock} onClick={(e) => e.stopPropagation()}>     
            {children}
        </div>
    </div>
 )   
}

export default MyModal;