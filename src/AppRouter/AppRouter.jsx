import Posts from "../Pages/Posts";
import About from "../Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "../Pages/Post";
import { privateRoute, publicRoute } from "../route/index";
import { useContext } from "react";
import { StateLogContext } from "../context/Context";

const AppRouter = () => {
  const {UserStateLog, setUserStateLog} = useContext(StateLogContext)
  return(
    UserStateLog
    ? 
    <Routes>
    {privateRoute.map(routte => 
      <Route path={routte.path} element={routte.element} exact={routte.exact} key={routte.path}/>
      )}
  </Routes> 
    :
    <Routes>
          {publicRoute.map(routte => 
            <Route path={routte.path} element={routte.element} exact={routte.exact} key={routte.path}/>
            )}  
        </Routes>     
    );
}

export default AppRouter