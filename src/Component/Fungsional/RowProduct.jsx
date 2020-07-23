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
                    <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/7/19278486/19278486_0914f15d-147a-4038-a238-8c96de76890e_800_800.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Tas Bathing APE BAPE CAMO SHARK</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 7.500.000</CardSubtitle></h3>
                        <CardText>Stock : 15</CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/3/19/1865947/1865947_75b2b6bf-ed20-45f6-aa8c-fb603bf256b5_700_700.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Hoodie OFF WHITE</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 8.000.000</CardSubtitle></h3>
                        <CardText>Stock : 10</CardText>
                        <CardText>Size : S,M,L,XL</CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://statik.tempo.co/data/2019/06/19/id_849540/849540_720.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Air Jordan x Indomie</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 15.000.000</CardSubtitle></h3>
                        <CardText>Stock : 20</CardText>
                        <CardText>Size : 40,41,42,43,44,45,46,47</CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://cf.shopee.co.id/file/83d1c515dcd97f1de408e2fe3010e8d7" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Baju Bape Shark Space Camo Glow In The Dark</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 2.000.000</CardSubtitle></h3>
                        <CardText>Stock : 20</CardText>
                        <CardText>Size : S,M,L,XL</CardText>
                    </CardBody>
                </Card>
                
                <Card>
                    <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/attachment/2018/9/6/153624513026374/153624513026374_dc0ee65f-bef9-485d-aa78-823020bb5a1e.png" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>HandBag Gucci Original </CardTitle></h5>
                        <h3><CardSubtitle>Rp. 10.000.000</CardSubtitle></h3>
                        <CardText>Stock : 20</CardText>
                    </CardBody>
                </Card>
                

               
                <CardDeck>
            <Card>
                    <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/1/0/0_ac572598-3d3f-4adc-ae89-b1ed9afb7f02_600_600.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Baju Thrasher Skatemag</CardTitle></h5>
                        <h3><CardSubtitle>Rp.500.000</CardSubtitle></h3>
                        <CardText>Stock : 15</CardText>
                        <CardText>Size : S,M,L,XL</CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://asset.kompas.com/crops/GZ2TeraGVsOurnLmlw-hVCzB_w4=/91x46:891x579/750x500/data/photo/2017/11/24/919996315.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Sepatu Adidas Yeezy V2 Beluga</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 11.000.000</CardSubtitle></h3>
                        <CardText>Stock : 15</CardText>
                        <CardText>Size : 40,41,42,43,44,45</CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/attachment/2019/11/4/15728116736004/15728116736004_976e7d5e-ea89-4746-8ab9-a14bd874d5a6.png" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Air Jordan 1 Retro High Fearless</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 8.000.000</CardSubtitle></h3>
                        <CardText>Stock : 30</CardText>
                        <CardText>Size : 40,41,42,43,44,45,46,47</CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/21/5264302/5264302_c84f92e4-3688-417c-8813-18f37b9da1d0_1000_1000.jpg" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>Baju Champion</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 1.000.000</CardSubtitle></h3>
                        <CardText>Stock : 50</CardText>
                        <CardText>Size : S,M,L,XL</CardText>
                    </CardBody>
                </Card>
                
                <Card>
                    <CardImg top width="100%" src="https://cf.shopee.co.id/file/0dbee2ef9509af23304f7296b31f895b" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>WaistBag Bape </CardTitle></h5>
                        <h3><CardSubtitle>Rp. 1.000.000</CardSubtitle></h3>
                        <CardText>Stock : 40</CardText>
                    </CardBody>
                </Card>
                

               
                


            </CardDeck>

            </CardDeck>
            </Col>
    )}

    export default RowProduct