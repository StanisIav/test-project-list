import About from "../Pages/About"
import Login from "../Pages/Login"
import Post from "../Pages/Post"
import Posts from "../Pages/Posts"

export const privateRoute = [
    {path: '/', element: <Posts/>, exact: true},
    {path: '/about', element: <About/>, exact: true},
    {path: '/:id', element: <Post/>, exact: true},
    {path: '*', element: <Posts/>, exact: true}
]

export const publicRoute = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '*', element: <Login/>, exact: true}
]




