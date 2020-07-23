import React from 'react'
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function RowProduct() {

    const { value, setValue } = useContext(CartContext)

    return (
        <Col>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src="https://statik.tempo.co/data/2019/06/19/id_849540/849540_720.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Air Jordan x Indomie</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 15.000.000</CardSubtitle></h3>
                        <CardText>Stock : 20</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://statik.tempo.co/data/2019/06/19/id_849540/849540_720.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>5 CM</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 97.750</CardSubtitle></h3>
                        <CardText>oleh Donny Dhirgantoro</CardText>
                    </CardBody>
                </Card>


            </CardDeck>
            </Col>
    )}

    export default RowProduct