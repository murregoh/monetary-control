import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

// Components
import { Header, Title, HeaderContainer } from '../../shared/Header.jsx';
import { Form, Input, ButtonContainer } from '../../shared/FormElements';
import Button from '../../shared/Button';
import { ReactComponent as SvgLogin } from '../../assets/images/registro.svg';
import { useState } from "react";
import Alert from "../../shared/Alert.jsx";

// Services
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const SignUp = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const regex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if (regex.test(email)) {
            if (password !== '' && confirmedPassword !== '') {
                if (password !== '' && password === confirmedPassword) {
                    try {
                        await createUserWithEmailAndPassword(auth, email, password);
                        history.push('/');
                    } catch (error) {
                        let message;
                        switch (error.code) {
                            case 'auth/invalid-password':
                                message = 'La contraseña tiene que ser de al menos 6 caracteres.'
                                break;
                            case 'auth/email-already-in-use':
                                message = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                                break;
                            case 'auth/invalid-email':
                                message = 'El correo electrónico no es válido.'
                                break;
                            default:
                                message = 'Hubo un error al intentar crear la cuenta.'
                                break;
                        }
                        setErrorMessage(message);
                    }
                } else {
                    setErrorMessage('The passwords are not the same');
                }
            } else {
                setErrorMessage('Passwords should not be empty');
            }
        } else {
            setErrorMessage('Email not valid');
        }
    }

    return (
        <>
            <Helmet >
                <title>Sign Up</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <Title>Sign Up</Title>
                    <div>
                        <Button to='/login'>Log In</Button>
                    </div>
                </HeaderContainer>
            </Header>

            <Form onSubmit={handleOnSubmit}>
                <Svg />

                <Input
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type='password'
                    name='confirmedPassword'
                    placeholder='Confirm Password'
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />
                <ButtonContainer>
                    <Button primary as='button' type='submit'>Create Account</Button>
                </ButtonContainer>
            </Form>
            <Alert type='error' message={errorMessage} />
        </>
    );
}

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem;
    margin.botton: 1.25rem;
`;

export default SignUp;