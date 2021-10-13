import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Fonts
import WebFont from 'webfontloader';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Container from './shared/Container';
import Login from './components/login/Login';
import OutgoingByCategory from './components/outgoingByCategory/OutgoingByCategory';
import OutgoingEdit from './components/outgoingEdit/OutgoingEdit';
import OutgoingList from './components/outgoingList/OutgoingList';
import SignUp from './components/signup/SignUp';
import Background from './shared/Background';
import { Helmet } from "react-helmet";
import { AuthProvider } from './context/AuthContext';

// images
import favicon from './assets/images/logo.png';
import PrivateRoute from './components/privateRoute/PrivateRoute';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (

    <>

      <Helmet>
        <link rel="shortcut icon" href={favicon} type='image/x-icon' />
      </Helmet>

      <AuthProvider>
        <BrowserRouter>
          <Container>
            <Switch>
              <Route path='/' component={App} exact />
              <Route path='/login' component={Login} exact />
              <Route path='/signup' component={SignUp} exact />

              <PrivateRoute path='/categories' exact>
                <OutgoingByCategory />
              </PrivateRoute>

              <PrivateRoute path='/list' exact>
                <OutgoingList />
              </PrivateRoute>

              <PrivateRoute path='/edit/:id' exact>
                <OutgoingEdit />
              </PrivateRoute>

              <Route path='*' component={App} />
            </Switch>
          </Container>
        </BrowserRouter>

        <Background />
      </AuthProvider>


    </>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'));