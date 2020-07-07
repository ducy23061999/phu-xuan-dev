import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Label, Input, Card, CardBody, CardTitle, Button, InputGroup, InputGroupAddon  } from '../../../components';

import {BookTable} from '../../../components/BookScreen/component/BookTable'
import { HeaderMain } from '../../../routes/components/HeaderMain';
import { useLocalStorage } from '@rehooks/local-storage'; 
import { writeStorage } from '@rehooks/local-storage';
import {DataDump} from '../../../common/dataDump'
import Constants from '../../../common/Constants'

export class CreateGoodsNote extends React.Component {
    
    componentDidMount() {
       this.state = {
           nameSupply: '',
           phoneNumber: '',
           date: '',
           goodsLoca: '',
       }
    }

    _onClickCreateGoodsNote = () => {
        const nameSupply = document.getElementById('nameSupply').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const date = document.getElementById('phoneNumber').date;
        const goodsLoca = document.getElementById('goodsLoca').value;

        alert(nameSupply);
    }
    
    render() {
        const [bookStore] = this.props.store;
        return (
            <Container>
                <HeaderMain 
                    title="Tạo phiếu nhập"
                    className="mb-5 mt-4"
                />
                <Row>
                    <Col md = {6}>
                        <Card className="mb-3">
                            <CardBody>
                                <Row>
                                    <Label for="nameSupply" sm={4}>
                                        Họ tên người giao
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="nameSupply" 
                                            placeholder="Nhập họ tên người giao" 
                                        />
                                    </Col>
                                </Row>
                                <Row style = {{marginTop: 20}}>
                                    <Label for="phoneNumber" sm={4}>
                                        SDT: 
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="phoneNumber" 
                                            placeholder="Nhập số điện thoại" 
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
                                    <Label for="date" sm={4}>
                                        Ngày lập
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="date" 
                                            placeholder="Nhập ngày nhập DD/MM/YYYY" 
                                        />
                                    </Col>
                                </Row>

                                <Row style = {{marginTop: 20}}>
                                    <Label for="goodsLoca" sm={4}>
                                        Nhập tại
                                    </Label>
                                    <Col sm={8}>
                                        <Input 
                                            type="text" 
                                            name="" 
                                            id="goodsLoca" 
                                            placeholder="Nhập nơi nhập kho" 
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                   <Col md = {4}></Col>
                    <Col md = {5}>
                        <h1>Danh Sách sách đã nhập</h1>
                    </Col>
                   <Col md = {3}></Col>
                   
                </Row>
                <Row>
                    <Col md = {12}>
                        <Card className="mb-3">
                            <Container style = {{marginTop: 20}}>
                                <BookTable books = {bookStore}/>
                                <Row>
                                    <Col md = {3} style = {{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                        <Label for="input-1" sm={4} style = {{}}>
                                            Ghi chú
                                        </Label>
                                    </Col>
                                    <Col md = {9}>
                                        <InputGroup style = {{marginTop: 40, marginBottom: 20, height: 100}}>
                                            <Input type="textarea" name="text" id="rightIconTextarea"/>
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-file-text-o"></i>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    </Col>
                </Row>
                <Row cellPadding = {50} style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Button color="success" style = {{marginLeft: 10, width: 200, height: 50}} onClick = {this._onClickCreateGoodsNote}>Tạo phiếu xuất</Button>
                </Row>
            </Container>
            
        )
    }
}