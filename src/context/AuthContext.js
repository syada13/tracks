import createDataContext from "./createDataContext";

// Reducer function : authReducer will be called by React directly whenever we call disptach function
const authReducer = (state, action) => {

    switch(action.type){
        default:
            return state;

    }
};

const signup = (disptach) =>{
    return ({ email, password }) => {
        // Make an api request to signup with provided email and password.

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
    { isSignedIn: false}
);