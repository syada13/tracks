import createDataContext from "./createDataContext";

// Reducer function : authReducer will be called by React directly whenever we call disptach function
const authReducer = (state, action) => {

    switch(action.type){
        default:
            return state;

    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {},
    { isSignedIn: false}
);