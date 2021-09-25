import { Header, Title, HeaderContainer, ContainerButtons } from '../../shared/Header';
import { Button } from '../../shared/Buttons';

const OutgoingByCategory = () => {
    return (
        <>
            <Header>
                <HeaderContainer>
                    <Title>Outgoing by Category</Title>
                    <ContainerButtons>
                        <Button to='/'>Back</Button>
                    </ContainerButtons>
                </HeaderContainer>
            </Header>
        </>
    );
}

export default OutgoingByCategory;