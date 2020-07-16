import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import logo from ''

const Homepage = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3"><img src={logo}></h1>
                            <p className="lead"> HypeBeast Store</p>
                            <p className="text-info">Created by: Rivaldo Avila Cantona</p>
                        </Container>
            </Jumbotron>
        </div>
    );
}

export default Homepage;