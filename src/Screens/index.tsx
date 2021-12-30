import React, { FC, useEffect, useState, ChangeEvent, MouseEvent } from 'react';
import { HackedBefore } from "../steps/EverBeenHacked";
import { InstagramUsername } from "../steps/InstagramUsername";
import { Answers } from "../steps/Answers";
import { IsThisYou } from "../steps/IsThisYou";
import {
    Redirect,
    Route,
    Switch,
  } from 'react-router-dom';
import { UserInputs } from '../models/UserInputs';

interface Props {
    userInput: UserInputs;
    handleChange?: (name: string, value: string | boolean)=> void;
}

const MainScreen: FC<Props> = ({ userInput, handleChange }) => {
    
    return (
        <Switch>
            <Route exact path={'/everBeenHacked'}>
                <HackedBefore 
                    userInput={userInput} 
                    handleChange={handleChange}
                />
            </Route>
            <Route exact path={'/instagramUserName'}>
                <InstagramUsername 
                    userInput={userInput} 
                    handleChange={handleChange}
                />
            </Route>
            <Route exact path={'/isThisYou'}>
                <IsThisYou 
                    userInput={userInput} 
                    handleChange={handleChange}
                />
            </Route>
            <Route exact path={'/answers'}>
                <Answers 
                    userInput={userInput}
                />
            </Route>
            <Redirect to={'/everBeenHacked'} />
        </Switch>
    );
}

export default MainScreen
