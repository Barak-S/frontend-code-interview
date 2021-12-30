import React, { FC, useEffect, useState, ChangeEvent, MouseEvent } from 'react';
import { UserInputs } from "./models/UserInputs";
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './assets/themes/theme';
import MainScreens from './Screens';

const App: FC = () => {
    const [userInput, setUserInput] = useState<UserInputs>({})

    useEffect(()=>{
        console.log(userInput)
    }, [userInput])

    const handleChange = (name: string, value: boolean | string) => {
        setUserInput(userInput => ({...userInput, [name]: value}))
    }

    
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <MainScreens 
                    userInput={userInput} 
                    handleChange={handleChange}
                />
            </Router>
        </MuiThemeProvider>
    );
}

export default App
