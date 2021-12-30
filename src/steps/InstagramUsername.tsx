import { FC, FormEvent, ChangeEvent, useEffect } from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import { StepInput } from "../models/Step";
import { UserInputs } from '../models/UserInputs';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const INPUT_ID = "instagramUsername";

interface Props {
    handleChange?: (name: string, value: boolean |string)=> void;
    userInput: UserInputs;
}

export const InstagramUsername: FC<Props> = ({userInput, handleChange}) => {
    const classes = useStyles();
    const history = useHistory();

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {'instagramUsername': {value}} = event.target as unknown as { "instagramUsername": { value: string } };
        handleChange && handleChange('instagramUsername', value)
        if (value.length)
            history.push('/isThisYou')
    }

    useEffect(()=>{
        if (userInput.hackedBefore === undefined){
            history.push('/everBeenHacked')
        }
    })

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <header style={{ position: 'relative' }}>
                    <img className={classes.headImg} src={CustomerSupportUrl}/>
                    What is your Instagram username?
                </header>
                <form onSubmit={submitForm} className={classes.formWrapper}>
                    <input placeholder='@USERNAME' className={classes.input} type="text" id={INPUT_ID}/>
                    <input className={classes.submit} type="submit" value="Next"/>
                </form>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        maxWidth: 500,
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        width: '100%',
        maxWidth: 593,
    },
    input: {
        width: '100%',
        height: 60,
        maxWidth: 246,
        marginTop: 36,
        border: `1px solid #ECECEC`,
        borderRadius: 8,
        paddingLeft: 6,
    },
    submit: {
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        maxWidth: '156px',
        marginTop: 24,
        height: 60,
        borderRadius: 8,
    },
    headImg: {
        position: 'absolute',
        width: 57,
        height: 57,
        left: -72,
        top: -22,
    }
}))