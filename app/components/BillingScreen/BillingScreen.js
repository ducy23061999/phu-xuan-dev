import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Label, Input, Card, CardBody, CardTitle, Button } from '../';
import { HeaderMain } from '../../../app/routes/components/HeaderMain';
import {BookTable} from '../BookScreen/component/BookTable'

export class BillingScreen extends React.Component {

    render() {
        const [bookStore] = this.props.store;
        return (
           <Container>
                <HeaderMain 
                    title="Thanh toán"
                    className="mb-5 mt-4"
                />
                <Row>
                    <Col md = {6}>
                        <Card className="mb-3">
                            <CardBody>
                                <Row>
                                    <Label for="input-1" sm={4}>
                                        Nhân viên lập
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="input-1" 
                                            placeholder="Enter Name..." 
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md = {6}>
                        <Card className="mb-3">
                            <CardBody>
                                <Row>
                                    <Label for="input-1" sm={4}>
                                        Ngày lập
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="input-1" 
                                            placeholder="Enter Name..." 
                                        />
                                    </Col>
                                </Row>

                                <Row style = {{marginTop: 20}}>
                                    <Label for="input-1" sm={4}>
                                        Tổng tiền
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="input-1" 
                                            placeholder="Enter Name..." 
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md = {12}>
                        <Card className="mb-3">
                            <Container style = {{marginTop: 20}}>
                                <BookTable books = {bookStore}/>
                            </Container>
                        </Card>
                    </Col>
                </Row>
                <Row cellPadding = {50} style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Button color="success" style = {{marginLeft: 10, width: 200, height: 50}}>Thanh toán</Button>
                </Row>
           </Container>
        )
    }
}