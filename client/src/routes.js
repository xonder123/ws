import {DEVICES_ROUTE, USERS_ROUTE} from "./utils/consts";
import Users from "./pages/Users";
import Devices from "./pages/Devices";


export const publicRoutes = [
    {
        path: USERS_ROUTE,
        Component: Users
    },
    {
        path: DEVICES_ROUTE,
        Component: Devices
    },
     
]
