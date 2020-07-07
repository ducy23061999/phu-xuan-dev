import React from 'react';
import { Container, Row, Col } from '../';

import {BookTable} from './component/BookTable'
import { HeaderMain } from '../../../app/routes/components/HeaderMain';
import { useLocalStorage } from '@rehooks/local-storage'; 
import { writeStorage } from '@rehooks/local-storage';
import {DataDump} from '../../common/dataDump'
import Constants from '../../common/Constants'

export class BookScreen extends React.Component {
    
    componentDidMount() {
        const [bookStore] = this.props.store;
        console.log(bookStore)
        // if (!bookStore || !Array.isArray(bookStore)) {
        //     // default data
        //     writeStorage(Constants.BOOK_KEY, JSON.stringify(DataDump));
        // }
    }
    
    render() {
        const [bookStore] = this.props.store;
        return (
            <Container>
                <HeaderMain 
                    title="Quản lí sách"
                    className="mb-5 mt-4"
                />
                <Row className="mb-5">
                    <Col>
                        <BookTable books = {bookStore || []} />
                    </Col>
                </Row>
            </Container>
        )
    }
}