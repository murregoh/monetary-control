import { Header, Title } from '../../shared/Header';
import { Helmet } from "react-helmet";
import BackButton from '../../shared/BackButton';

const OutgoingList = () => {
    return (
        <>
            <Helmet>
                <title>
                    Outgoings By List
                </title>
            </Helmet>

            <Header>
                <BackButton />
                <Title>Outgoing by List</Title>
            </Header>
        </>
    );
}

export default OutgoingList;