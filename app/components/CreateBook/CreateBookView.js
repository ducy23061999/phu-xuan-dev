import React from 'react';
import faker from 'faker/locale/en_US';

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    UncontrolledModal,
    ModalHeader,
    CardBody,
    CardTitle,
    CardGroup,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput, 
    FormText

} from '../../components'
import Autosuggest from 'react-autosuggest';

const renderSuggestion = suggestion => (
    <Label for="input" sm={3} style = {{backgroundColor: 'blue'}}>
        {suggestion.name}
    </Label>
);
  
export class CreateBookView extends React.Component {
    constructor(props) {
        super(props)
        const {data, dataProvide, isEdit} = this.props
        this.state = {
            book: data || [],
            isCreate: dataProvide ? true : false,
            suggestions: [],
            value: ''
        }
        
    }
    getSuggestions = value => {
        const {dataProvide} = this.props;
        const dataSource = dataProvide;
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : dataSource.filter(book =>
            book.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    _onCLickSave = () => {
        const {book, isCreate} = this.state;

        let newBook = book;
        if (isCreate) {
            book.id = -1;
        };
        if(this.props.onReciveNewBook) {
            this.props.onReciveNewBook(book)
        }
    }

    render() {
        const {targetId, data} = this.props;
        const {book, isCreate, suggestions, value} = this.state;

        return (
            <UncontrolledModal target= {targetId} size="lg">
                <ModalHeader tag="h5">
                    <h3>{book.id === 0 ? 'Tạo sách' : 'Cập nhật sách'}</h3>
                    <span className="small ml-1 text-muted">
                        #{book.id || ''}
                    </span>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="input" sm={3}>
                                Tên sách
                            </Label>
                            <Col sm={9}>
                                <Input 
                                    type="" 
                                    name="" 
                                    value= {book.name || ''}
                                    id="input1" 
                                    innerRef = {name => this._name = name}
                                    placeholder="" 
                                    onChange = {(evt) => {
                                        let data = book;
                                        data.name = this._name.value;
                                        if (isCreate) {
                                            this.setState({book: data})
                                        }
                                        
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="input" sm={3}>
                                Tác giả
                            </Label>
                            <Col sm={9}>
                                <Input 
                                    type="" 
                                    name="" 
                                    value= {book.author || ''}
                                    id="input1" 
                                    placeholder="" 
                                    innerRef = {author => this._author = author}
                                    onChange = {(evt) => {
                                        let data = book;
                                        data.author = this._author.value;
                                        if (isCreate) {
                                            this.setState({book: data})
                                        }
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="input" sm={3}>
                                Nhà xuất bản
                            </Label>
                            <Col sm={9}>
                                <Input 
                                    type="" 
                                    name="" 
                                    value= {book.releaseSupply || ''}
                                    id="input1" 
                                    placeholder="" 
                                    innerRef = {releaseSupply => this._releaseSupply = releaseSupply}
                                    onChange = {(evt) => {
                                        let data = book;
                                        data.releaseSupply = this._releaseSupply.value;
                                        if (isCreate) {
                                            this.setState({book: data})
                                        }
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="input" sm={3}>
                                Giá
                            </Label>
                            <Col sm={9}>
                                <Input 
                                    type="" 
                                    name="" 
                                    value= {book.price || ''}
                                    id="input1" 
                                    placeholder="" 
                                    innerRef = {price => this._price = price}
                                    onChange = {(evt) => {
                                        let data = book;
                                        data.price = this._price.value;
                                        if (isCreate) {
                                            this.setState({book: data})
                                        }
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="customSelect" sm={3}>
                                Trạng thái
                            </Label>
                            <Col sm={9}>
                                <CustomInput 
                                    type="select" 
                                    name="customSelect" 
                                    id="customSelect"  
                                >
                                    <option defaultValue="">{data.book || ''}</option>
                                    <option>Kho</option>
                                    <option>Trưng bày</option>
                                    <option>Hết hàng</option>
                                </CustomInput>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="customSelect" sm={3}>
                                Giảm giá
                            </Label>
                            <Col sm={9}>
                                <CustomInput 
                                    type="select" 
                                    name="customSelect" 
                                    id="customSelect"  
                                >
                                    <option defaultValue="">{data.book || ''}</option>
                                    <option>0.1</option>
                                    <option>0.2</option>
                                    <option>0.3</option>
                                    <option>0.4</option>
                                    <option>0.5</option>
                                </CustomInput>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="customSelect" sm={3}>
                                Chủ đề
                            </Label>
                            <Col sm={9}>
                                <CustomInput 
                                    type="select" 
                                    name="customSelect" 
                                    id="customSelect"  
                                >
                                    <option defaultValue="">{data.book || 'None'}</option>
                                    <option>0.1</option>
                                    <option>0.2</option>
                                    <option>0.3</option>
                                    <option>0.4</option>
                                    <option>0.5</option>
                                </CustomInput>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="fileInputStyle" sm={3}>Ảnh</Label>
                            <Col sm={9}>
                                <Input 
                                    type="" 
                                    name="" 
                                    value= {book.photo || ''}
                                    id="input1" 
                                    placeholder="" 
                                    innerRef = {photo => this._photo = photo}
                                    onChange = {(evt) => {
                                        let data = book;
                                        data.photo = this._photo.value;
                                        if (isCreate) {
                                            this.setState({book: data})
                                        }
                                    }}
                                />
                                <FormText color="muted">
                                    This is some placeholder block-level help text for the above input.
                                    It&apos;s a bit lighter and easily wraps to a new line.
                                </FormText>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <UncontrolledModal.Close color="link" className="text-primary" size="lg"> 
                        Close
                    </UncontrolledModal.Close>
                    <UncontrolledModal.Close color="primary" size="lg" onClick = {this._onCLickSave}> 
                        Save
                    </UncontrolledModal.Close>
                </ModalFooter>
            </UncontrolledModal>
        )
    }
}