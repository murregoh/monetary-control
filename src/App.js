import { Header, Title, HeaderContainer, ContainerButtons } from './shared/Header';
import { Helmet } from "react-helmet";
import Button from './shared/Button';
import SignOutButton from './shared/SignOutButton';

const App = () => {
  return (
    <>
      <Helmet>
        <title>
          Add Outgoings
        </title>
      </Helmet>

      <Header>
        <HeaderContainer>
          <Title>Add Outgoing</Title>
          <ContainerButtons>
            <Button to='/categories'>Category</Button>
            <Button to='/list'>Outgoing List</Button>
            <SignOutButton />
          </ContainerButtons>
        </HeaderContainer>
      </Header>
    </>
  );
}

export default App;