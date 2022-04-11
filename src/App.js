import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AppRouter from "./AppRouter/AppRouter.jsx";
import { StateLogContext } from "./context/Context";
import { useEffect, useState } from "react";

function App() {
  
  const [UserStateLog, setUserStateLog] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('UseState')){
      setUserStateLog(true)
    }
  },[])

  return(
    <StateLogContext.Provider value={{
      UserStateLog,
      setUserStateLog
    }}>
      <Router>
        <div>
          <Navbar/>
          <AppRouter/>
        </div>
      </Router>
    </StateLogContext.Provider>
  )
  }
export default App; 