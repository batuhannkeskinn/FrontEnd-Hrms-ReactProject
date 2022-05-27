// import { LOGIN_TO_USER } from "../actions/loginAction";
// import { loginItems } from "../initialValuess/loginItems";

// const initialState = {
//     loginItems: loginItems,
// }
// export default function optionReducer(state = initialState, { type, payload }) {
//     switch (type) {
//         case LOGIN_TO_USER:
//             return{
//                 ...state,
//                 loginItems:[...[{loggedIn:true,user:payload}]]
//             }
            
//             case USER_LOGOUT:
//                 return{
//                     ...state,
//                     loginItems:[{loggedIn:false,user:{id:0,userType:0}}]
//                 };
// default:

        
//             return state;
//     }
// } 