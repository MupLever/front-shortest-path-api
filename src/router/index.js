import Login from "../pages/Login";
import RouteCreate from "../pages/RouteCreate";
import RouteId from "../pages/RouteId";
import Routes from "../pages/Routes";
import Signup from "../pages/Signup";


export const privateRoutes = [
    {path: '/routes', element: <Routes/>, exact: true},
    {path: '/routes/:id', element: <RouteId/>, exact: true},
    {path: '/routes/new', element: <RouteCreate/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '/signup', element: <Signup/>, exact: true},
]
