
import React, { createContext, useState } from 'react';
import { Users } from './seed';

// ّ
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

//below is my Them color context
const UserContext = createContext([{}, () => { }]); // Because I want to pass both state and setState

const UserProvider = (props) => {
    const [state, setState] = useState(Users[0]);
    return (
        <UserContext.Provider value={[state, setState]}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };
