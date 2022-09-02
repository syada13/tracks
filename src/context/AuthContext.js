import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

// Reducer function : authReducer will be called by React directly whenever we call disptach function
const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
        return {...state, errorMessage: action.payload};
        case 'signup':
        return {errorMessage:'',token: action.payload}
        case 'signin':
        return {errorMessage:'',token: action.payload}
        case 'clear-error_message':
        return {...state, errorMessage: ''}
        case signout:
        return {token: null, errorMessage: ''};
        default:
        return state;

    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear-error_message' });
};



const signup = (disptach) => async({ email, password }) => {
        // Make an api request to signup with provided email and password.

           try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            disptach({ type: 'signup', payload: response.data.token});
            navigate('TrackList');

           }catch(err){
            disptach({ 
                type: 'add_error', 
                payload: 'Something went wrong during signup!'
            });
           }

        // Signup Success: Modify our state, and say that we're authenticated

        // Signup failure: Reflect an error message

    };


const signin = (dispatch) =>  async({ email, password }) => {

        try {
            const response = await trackerApi.post('signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token});
            navigate('TrackList');

        }catch(err){
            dispatch({
                type: 'add_error',
                payload:'Something went wrong with sign in'

            });

        }

    };

    const tryLocalSignin = dispatch => async() => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({ type: 'signin', payload: token});
            navigate('TrackList');
        }else {
            navigate('Signup');
        }

    };


signout = dispatch => async() => {
    await AsyncStorage.removeItem('token');
       dispatch({ type: signout });
       navigate('loginFlow');

};


export const {Provider, Context} = createDataContext(
    authReducer,
    { signup, signin, signout,clearErrorMessage, tryLocalSignin },
    { token:'',errorMessage: ''}
);