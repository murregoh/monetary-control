import { Header, Title, HeaderContainer, ContainerButtons } from './shared/Header';
import { Button } from './shared/Buttons';

const App = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Title>Add Outgoing</Title>
          <ContainerButtons>
            <Button to='/categories'>Category</Button>
            <Button to='/list'>Outgoing List</Button>
            <Button>X</Button>
          </ContainerButtons>
        </HeaderContainer>
      </Header>
    </>
  );
}

export default App;
