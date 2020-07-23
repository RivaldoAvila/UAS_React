import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import logo from '../Logo/LOGO_SEPATU002.png'


const AboutComp = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3"><img src={logo} /></h1>
                    <h1 className="display-3">HYPE BEAST STORE!</h1>
                    <p className="lead">Selamat Datang Di Hype Beast Store yang menjual berbagai model baju,hoodie,tas,dan sepatu yang bermerk brand </p>
                    <p className="lead">Alamat   : Jln.Jendral Soedirman No.99 Purwokerto </p>
                    <p className="lead">No WhatsApp  : 08995332444 </p>
                    <p className="lead">Instagram    : hypebeast.id </p>


                </Container>
            </Jumbotron>


        </div>
    );
}

export default AboutComp; 