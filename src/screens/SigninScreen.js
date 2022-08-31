import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import AuthFrom from './components/AuthForm';
import NavLink from './components/NavLink';

const SigninScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AuthFrom
             headerText="Sign In to Your Account"
             errorMessage="" 
             onSubmit={ () => {}}
             submitButtonText="Sign In"
            />
            <NavLink 
             text=" Dont have an account? Sign up instead"
             routeName="Signup"
            />
        </View>
    );

};

SigninScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom:250
      }
});

export default SigninScreen;