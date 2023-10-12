import {Container} from "react-bootstrap";
import Development from "../components/divisions/Development";
import Startup from "../components/divisions/Startup";
import {Fragment} from "react";
import Fullstack from "../components/divisions/Fullstack";
import Devices from "../components/divisions/Devices";
import Customers from "../components/divisions/Customers";
import Recruiters from "../components/divisions/Recruiters";
import Content from "../components/divisions/Content";

const Home = () => {

    const onSendEmail = async (details) => {
        const response = await fetch('/api/subscription', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.status === 201;
    }

    const onVerifyEmail = async (details) => {
        const response = await fetch('/api/subscription', {
            method: 'PUT',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.status === 204;
    }

    const onDeleteEmail = async (details) => {
        const response = await fetch('/api/subscription', {
            method: 'DELETE',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.status === 204;
    }

    return (
        <Fragment>
            <Container>
                <Development/>
            </Container>
            <Container fluid className="darker skew">
                <Startup/>
            </Container>
            <Container>
                <Fullstack/>
            </Container>
            <Container fluid className="painted skew">
                <Devices/>
            </Container>
            <Container>
                <Customers/>
            </Container>
            <Container fluid className="colorful skew">
                <Recruiters onSendEmail={onSendEmail} onVerifyEmail={onVerifyEmail} onDeleteEmail={onDeleteEmail}/>
            </Container>
            <Container>
                <Content/>
            </Container>
        </Fragment>
    );
};

export default Home;
