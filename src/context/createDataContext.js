import React, {useReducer} from 'react';


export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const[state,dispatch] = useReducer(reducer, defaultValue);

        const boundActions ={};
        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions}}>
                {children}
            </Context.Provider>
        );

    };

    /*
     Provider : A component which will make all our data available to everything in our application.
     Context: Context is an object which will be used to access the data provided by Provider from one of our child component
    */
    return {Context, Provider };

};