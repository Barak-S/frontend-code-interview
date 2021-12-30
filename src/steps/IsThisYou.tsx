import { FC, useEffect, ChangeEvent } from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import profilePictureUrl from '../assets/profilepic.jpeg';
import { UserInputs } from "../models/UserInputs";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const RADIO_BUTTON_GROUP = "isThisYou";

interface Props {
    handleChange?: (name:  string, checked: boolean | string)=> void;
    userInput: UserInputs;
}

export const IsThisYou: FC<Props> = ({ userInput, handleChange}) => {
    const classes = useStyles();
    const history = useHistory();

    const setAnswer =  (name:  string, checked: boolean | string) => {
        handleChange && handleChange(name, checked);
        history.push('/answers')
    }

    useEffect(()=>{
        if (userInput.hackedBefore === undefined){
            history.push('/everBeenHacked')
        } else if (userInput.instagramUsername === undefined){
            history.push('/instagramUserName')
        }
    })

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <header style={{ position: 'relative', paddingBottom: 36, fontSize: 20 }}>
                    <img className={classes.headImg} src={CustomerSupportUrl}/>
                    Is this you?
                </header>
                <main style={{ width: '100%' }}>
                    <div className={classes.profileDetails} id = 'profile-details'>
                        <img src={profilePictureUrl} style={{ maxHeight: '66px', maxWidth: '66px', borderRadius:  100, marginRight: 28 }}/>
                        {userInput.instagramUsername}
                    </div>
                    <div style={{ display: 'flex', width: '100%' }} id = 'is-this-you-questions'>
                        <label className={classes.checkbox}>
                            <input 
                                type="radio" 
                                name={RADIO_BUTTON_GROUP} 
                                onChange={(e) => setAnswer(e.currentTarget.name, true) }
                                checked={userInput.isThisYou === true}
                            />
                            Yes, that's me!
                        </label>
                        <label className={classes.checkbox}>
                            <input 
                                type="radio" 
                                name={RADIO_BUTTON_GROUP} 
                                onChange={(e) => setAnswer(e.currentTarget.name, false) }
                                checked={userInput.isThisYou === false}
                            />
                            No, that's somebody else
                        </label>
                    </div>
                </main>
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
        maxWidth: 606,
        width: '100%',
        alignItems: 'start',
    },
    formWrapper: {
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
    profileDetails: {
        border: `1px solid #ECECEC`,
        borderRadius: 10,
        height: 122,
        maxWidth: 606,
        width: '100%',
        fontSize: 28,
        display: 'flex',
        alignItems: 'center',
        padding: '0px 28px',
        marginBottom: 24,
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