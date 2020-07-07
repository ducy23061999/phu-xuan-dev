import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import moment from 'moment';
import _ from 'lodash';
import faker from 'faker/locale/en_US';

import {
    Avatar,
    Badge,
    Button,
    ButtonGroup,
    Row,
    Col
} from '../../../components';
import { CustomExportCSV } from './CustomExportButton';
import { CustomSearch } from './CustomSearch';
import { randomArray, randomAvatar } from '../../../utilities';
import { CustomPaginationPanel } from './CustomPaginationPanel';
import { CustomSizePerPageButton } from './CustomSizePerPageButton';
import { CustomPaginationTotal } from './CustomPaginationTotal';
import Images from '../../../routes/Interface/Images';
import {DataDump, defautValue} from '../../../common/dataDump'
import { writeStorage, useLocalStorage } from '@rehooks/local-storage';
import {CreateBookView} from '../../../components/CreateBook/CreateBookView'
import { Constants } from 'ag-grid-community';
import Const from '../../../common/Constants'

export const currentBooks = () => {
    const books = localStorage.getItem(Const.BOOK_KEY);

    let useableBooks;
    try {
        useableBooks = JSON.parse(books);
    } catch (e) {
        useableBooks = []
    }
    return useableBooks;
}


const sortCaret = (order) => {
    if (!order)
        return <i className="fa fa-fw fa-sort text-muted"></i>;
    if (order)
        return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
};

export class BookTable extends React.Component {
    constructor(props) {
        super(props);

        const {books} = this.props;
        this.state = {
            users: Array.from(books)
        }
    }

    handleAddRow = (book) => {
        if (!book.author || !book.name || book.price <= 0) {
            alert("Nhap sai")
            return;
        }

        let books = currentBooks();
        const pos = _.findIndex(books, {id: book.id})
        debugger
        if (pos >= 0) {
           books[pos] = book;  
        } else {
            let newBook = book;
            newBook.id = books.length + 1;

            books.push(newBook);

        }

        this.setState({users: books}, () => {
            this.bookTable.forceUpdate()
            writeStorage(Const.BOOK_KEY, JSON.stringify(books));
        });


        
    }
    
    onDeleteBook = (book) => {
        let books = currentBooks();
        const deleteBooks = books.filter((bookItem) => bookItem.id != book.id);

        this.setState({
            users: deleteBooks
        }, () => {
            writeStorage(Const.BOOK_KEY, JSON.stringify(deleteBooks));
        });
    }

    createColumnDefinitions() {
        const books = this.state.users;
        return [
            {
                dataField: 'photo',
                text: 'Photo',
                formatter: (cell) => (
                    <img src={cell} style= {{width: 100, height: 100}}/>
                        
                )
            }, {
                dataField: 'name',
                text: 'Tên sách',
                sort: true,
                sortCaret
            }, {
                dataField: 'releaseSupply',
                text: 'Nhà xuất bản',
                sort: true,
                sortCaret
            }, {
                dataField: 'price',
                text: 'Giá',
                sort: true,
                sortCaret
            }, {
                dataField: 'status',
                text: 'Trạng thái',
                sort: true,
                sortCaret,
                formatter: (cell) => {
                    const color = (status) => {
                        const map = {
                            'Active': 'success',
                            'Suspended': 'danger',
                            'Waiting': 'info',
                            'Unknown': 'secondary'
                        };
                        return map[status];
                    }

                    return (
                        <Badge color={ color(cell) }>
                            { cell }
                        </Badge>
                    );
                }
            }, {
                dataField: 'author',
                text: 'Tác giả',
                sort: true,
                sortCaret
            }, {
                dataField: 'salePrice',
                text: 'Giảm giá',
                sort: true,
                sortCaret,
                formatter: (cell, row) => (
                    <span>
                        { row.earningsCurrencyIcon }
                        { _.isNumber(cell) && cell.toFixed(2) }
                    </span>
                )
            },
            {
                dataField: 'action',
                text: 'Action',
                sort: false,
                formatter: (cell, row) => {
                    return (
                        <Row>
                            <Button color="secondary" style = {{marginLeft: 10}} id = {`modal_${row.id}`}>Sửa</Button>
                            <CreateBookView targetId = {`modal_${row.id}`} data = {row} dataProvide = {books}/>
                            <Button color="danger" style = {{marginLeft: 10}} onClick = {() => {
                                this.onDeleteBook(row);
                            }} >Xoá</Button>
                        </Row>
                    
                    )
                }
            }
        ]; 
    }

    render() {
        const columnDefs = this.createColumnDefinitions();
        let books = this.state.users;
        console.log(books.length);

        if (Array.from(books).length > 0) {
            books = books.sort((a, b) => {
                return b.id - a.id
            });
    
        }

        const paginationDef = paginationFactory({
            paginationSize: 5,
            showTotal: true,
            pageListRenderer: (props) => (
                <CustomPaginationPanel { ...props } size="sm" className="ml-md-auto mt-2 mt-md-0" />
            ),
            sizePerPageRenderer: (props) => (
                <CustomSizePerPageButton { ...props } />
            ),
            paginationTotalRenderer: (from, to, size) => (
                <CustomPaginationTotal { ...{ from, to, size } } />
            )
        });

        const expandRow = {
            renderer: row => (
                <Row>
                    <Col md={ 6 }>
                        <dl className="row">
                            <dt className="col-sm-6 text-right">Ngày nhập</dt>
                            <dd className="col-sm-6">{ moment(row.lastLoginDate).format('DD-MMM-YYYY') }</dd>

                            <dt className="col-sm-6 text-right">Lô sách</dt>
                            <dd className="col-sm-6">{ 'LO1001' }</dd>

                            <dt className="col-sm-6 text-right">Nhân viên nhập</dt>
                            <dd className="col-sm-6">{ 'Ý Trần' }</dd>
                        </dl>
                    </Col>
                    <Col md={ 6 }>
                        <dl className="row">
                            <dt className="col-sm-6 text-right">Số lượng trong kho</dt>
                            <dd className="col-sm-6">{ 100 }</dd>

                            <dt className="col-sm-6 text-right">Số lượng trên kệ trưng bày</dt>
                            <dd className="col-sm-6">{ 10 }</dd>

                            <dt className="col-sm-6 text-right">Tổng cộng</dt>
                            <dd className="col-sm-6">{ 110 }</dd>
                            
                        </dl>
                    </Col>
                </Row>
            ),
            showExpandColumn: true,
            expandHeaderColumnRenderer: ({ isAnyExpands }) => isAnyExpands ? (
                    <i className="fa fa-angle-down fa-fw fa-lg text-muted"></i>
                ) : (
                    <i className="fa fa-angle-right fa-fw fa-lg text-muted"></i>
                ),
            expandColumnRenderer: ({ expanded }) =>
                expanded ? (
                    <i className="fa fa-angle-down fa-fw fa-lg text-muted"></i>
                ) : (
                    <i className="fa fa-angle-right fa-fw fa-lg text-muted"></i>
                )
        }

        return (
            <React.Fragment>
             <div className="d-flex justify-content-end align-items-center mb-2">
                    <div className="d-flex ml-auto">
                        <CustomSearch
                            className="mr-2"
                        />
                        <ButtonGroup>
                            <CustomExportCSV
                            >
                                Export
                            </CustomExportCSV>
                            <Button
                                size="sm"
                                outline
                                // onClick={ this.handleAddRow.bind(this) }
                                id = {'create_new_goods'}
                            >
                                Add <i className="fa fa-fw fa-plus"></i>
                            </Button>
                            <CreateBookView
                                targetId = {'create_new_goods'} 
                                data = {defautValue} 
                                dataProvide = {books} 
                                onReciveNewBook = {this.handleAddRow.bind(this)}
                                />
                        </ButtonGroup>
                        
                    </div>
                </div>
                <BootstrapTable
                    classes="table-responsive-lg"
                    bordered={ false }
                    expandRow={ expandRow }
                    responsive
                    hover
                    ref = {bookTable => this.bookTable = bookTable}
                    keyField="book-provider"
                    data={ books }
                    columns={ columnDefs }
                    search
                    exportCSV
                    pagination = {paginationDef}
                />

            </React.Fragment>
        );
    }
}