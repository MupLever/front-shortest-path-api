import Login from "../pages/Login";
import RouteId from "../pages/RouteId";
import Routes from "../pages/Routes";
import Signup from "../pages/Signup";


export const privateRoutes = [
    {path: '/routes', element: <Routes/>, exact: true},
    {path: '/routes/:id', element: <RouteId/>, exact: true},
    // {path: '/routes/:id/edit', element: RouteIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '/signup', element: <Signup/>, exact: true},
]