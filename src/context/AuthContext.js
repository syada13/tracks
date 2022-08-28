import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

// Reducer function : authReducer will be called by React directly whenever we call disptach function
const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
        return {...state, errorMessage: action.payload};
        default:
            return state;

    }
};

const signup = (disptach) =>{
    return  async({ email, password }) => {
        // Make an api request to signup with provided email and password.
           try {
            const response = await trackerApi.post('/signup', { email, password });
           }catch(err){
            disptach({ type: 'add_error', payload: 'Something went wrong during signup!'});
           }
        // Signup Success: Modify our state, and say that we're authenticated

        // Signup failure: Reflect an error message

    };
}

const signin = (dispatch) => {
    return ({ email, password }) =>{

        //Try to signin

        //Signin Success:

        //Signin Failure:

    };
}

signout = (dispatch) =>{
    return () => {

        //Signout

    };
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    { isSignedIn: false,errorMessage: ''}
);