import { FC, ChangeEvent, useEffect } from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import { StepInput } from "../models/Step";
import { makeStyles } from '@material-ui/core/styles';
import { UserInputs } from "../models/UserInputs";
import { useHistory } from 'react-router-dom';


interface Props {
    userInput: UserInputs;
}

export const Answers: FC<Props> = ({ userInput }) => {
    const history = useHistory();

    useEffect(()=>{
        if (userInput.hackedBefore === undefined && userInput.instagramUsername === undefined && userInput.isThisYou === undefined){
            history.push('/')
        }
    }, [history, userInput])
    
    return (
        <div>
            Answers: {JSON.stringify(userInput)}            
        </div>
    );
}
