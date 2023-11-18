// import React from "react";
// import { Outlet,Navigate } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../../store/auth-context";
// import loginImg from '../assets/OIP.jpg';


// const AuthLayout = ()=>{
//     const authCtx = useContext(AuthContext);
    
//     return(
//         <>
//             {authCtx.isLoggedIn ? (
//                 <Navigate to="/" />
//             ) : (
//                 <>
//                     <section>
//                         <Outlet />
//                     </section>
                    
//                         <img className="hidden sm:block w-full bg-no-repeat h-full object-cover" src={loginImg} alt="user" />
                   
//                 </>

//             )

//             }
        
//         </>

//     )
// }
// export default AuthLayout;