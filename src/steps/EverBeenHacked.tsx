import { FC, ChangeEvent } from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import { StepInput } from "../models/Step";
import { makeStyles } from '@material-ui/core/styles';
import { UserInputs } from "../models/UserInputs";
import { useHistory } from 'react-router-dom';


const RADIO_BUTTON_GROUP = "hackedBefore";


interface Props {
    handleChange?: (name:  string, checked: boolean | string)=> void;
    userInput: UserInputs;
}

export const HackedBefore: FC<Props> = ({userInput, handleChange}) => {
    const classes = useStyles()
    const history = useHistory();

    const setAnswer =  (name:  string, checked: boolean | string) => {
        handleChange && handleChange(name, checked);
        history.push('/instagramUserName')
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <header style={{ position: 'relative', paddingBottom: 36 }}>
                    <img className={classes.headImg} src={CustomerSupportUrl}/>
                    Have you ever been hacked before?
                </header>
                <main style={{ display: 'flex', alignItems: 'center' }}>
                    <label className={classes.checkbox}>
                        <input 
                            type="radio" 
                            name={RADIO_BUTTON_GROUP} 
                            onChange={(e) => setAnswer(e.currentTarget.name, true)}
                            checked={userInput.hackedBefore === true}
                        />
                        Yes, I've been hacked before
                    </label>
                    <label className={classes.checkbox}>
                        <input 
                            type="radio" 
                            name={RADIO_BUTTON_GROUP} 
                            onChange={(e) => setAnswer(e.currentTarget.name, false)}
                            checked={userInput.hackedBefore === false}
                        />
                        No, I've never been hacked
                    </label>
                </main>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        width: '100%',
        maxWidth: 593,
    },
    headImg: {
        position: 'absolute',
        width: 57,
        height: 57,
        left: -72,
        top: -22,
    },
    checkbox: {
        maxWidth: 246,
        width: '100%',
        height: 60,
        border: `1px solid #ECECEC`,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        padding: '0px 20px',
        '&:first-child': {
            marginRight: 24
        }
    }
}))