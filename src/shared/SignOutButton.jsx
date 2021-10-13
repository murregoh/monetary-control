import { ReactComponent as SignOutButtonSVG } from '../assets/images/log-out.svg';
import Button from './Button';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router';
import { auth } from '../firebase/firebase.config';

const SignOutButton = () => {

    const history = useHistory();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            history.push('/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Button bigIcon as='button' onClick={handleSignOut}>
            <SignOutButtonSVG />
        </Button>
    );
}

export default SignOutButton;