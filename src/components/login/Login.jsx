import { Helmet } from "react-helmet";
import styled from "styled-components";

// Components
import { Header, Title, HeaderContainer } from '../../shared/Header.jsx';
import { Form, Input, ButtonContainer } from '../../shared/FormElements';
import Button from '../../shared/Button';
import { ReactComponent as SvgLogin } from '../../assets/images/login.svg';
import { useState } from "react";
import { useHistory } from "react-router";

// Services
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const regex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if (regex.test(email)) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                history.push('/');
            } catch (error) {

                switch (error.code) {
                    case 'auth/wrong-password':
                        console.log('Invalid password');
                        break;
                    default:
                        console.log(error.message);
                        break;
                }
                console.log(error);
            }
        }
    }

    return (
        <>
            <Helmet >
                <title>Log In</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <Title>Log In</Title>
                    <div>
                        <Button to='/signup'>Sign Up</Button>
                    </div>
                </HeaderContainer>
            </Header>

            <Form onSubmit={handleOnSubmit}>
                <Svg />

                <Input
                    type='email'
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
                <ButtonContainer>
                    <Button primary as='button' type='submit'>Log In</Button>
                </ButtonContainer>
            </Form>

        </>
    );
}

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem;
    margin.botton: 1.25rem;
`;

export default Login;