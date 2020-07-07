import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from '../';

import { HeaderMain } from '../../../app/routes/components/HeaderMain';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../styles/react-tabs.scss';
import {BookTable} from '../BookScreen/component/BookTable'

export class BookSelfScreen extends React.Component {

    render() {
        const [bookStore] = this.props.store;
       return (
            <Container>
                <HeaderMain 
                    title="Quản lí vị trí sách"
                    className="mb-5 mt-4"
                />
                <Row className="mb-5">
                    <Col md = {12}>
                        <Tabs>
                            <TabList>
                                <Tab>Đời sống</Tab>
                                <Tab>Tâm hồn</Tab>
                            </TabList>

                            <TabPanel>
                                <BookTable books = {bookStore}/>
                            </TabPanel>

                            <TabPanel>
                                <BookTable books = {bookStore}/>
                            </TabPanel>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
       )
    }
}