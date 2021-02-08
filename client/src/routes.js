import Login from "./components/auth/login";
import SignUp from "./components/auth/registration";

const routes=[
   {
       path:"/login",
       component:Login,
       icon:"",
       key:0
   },
   {
    path:"/signup",
    component:SignUp,
    icon:"",
    key:1
    }
];

export default routes;