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

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <React.StrictMode>


      <BrowserRouter>

        <Container>

          <Switch>

            <Route path='/' component={App} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/signup' component={SignUp} exact />
            <Route path='/categories' component={OutgoingByCategory} exact />
            <Route path='/list' component={OutgoingList} exact />
            <Route path='/edit/:id' component={OutgoingEdit} exact />
            <Route path='*' component={App} />

          </Switch>

        </Container>

      </BrowserRouter>

      <Background />
    </React.StrictMode>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'));