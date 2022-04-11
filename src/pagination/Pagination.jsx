import React from "react";
import '../style/App.css'

const Pagination = ({AllNum, SetObj, Obj}) => {
    return(  
    <div className="WrapperButtPagin"> 
    {AllNum.map(el => 
      <button key={el} className={Obj === el ? 'activeButt' : 'ButtPagin'} onClick={() => SetObj(el)}>{el}</button>
      )}
    </div>
    )   
}

export default Pagination;