import { Header, Title } from '../../shared/Header';
import { Helmet } from "react-helmet";
import BackButton from '../../shared/BackButton';

const OutgoingByCategory = () => {
    return (
        <>
            <Helmet>
                <title>
                    Outgoings By Category
                </title>
            </Helmet>

            <Header>
                <BackButton />
                <Title>Outgoing by Category</Title>
            </Header>
        </>
    );
}

export default OutgoingByCategory;