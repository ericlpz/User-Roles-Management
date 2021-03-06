import React, { Component } from 'react';
import RoleForm from './RoleForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class FilterForm extends Component  {

    searchInput = React.createRef();
    filterInput = React.createRef();

    searchHandler = () => {
        this.props.searchQuery(this.searchInput.current.value);
    }

    filterHandler = () => { 
        this.props.filterQuery(this.filterInput.current.value);
    }

    showformHandler = () => { 
        this.props.toggleForm();
    }

    render () {
        return (
            <div>
                <Form>
                    <Row>
                        <Col xs={6} md={4} lg={4}>
                        <Form.Control onChange={this.searchHandler} ref={this.searchInput} className="custom" placeholder="Look up name..." />
                        </Col>
                        <Col xs={6} md={4} lg={4}>
                        <Form.Control onChange={this.filterHandler} ref={this.filterInput} as="select" className="custom">
                            <option value="">Active and Inactive</option>
                            <option value="yes">Active</option>
                            <option value="no">Inactive</option>
                        </Form.Control>
                        </Col>
                        <Col xs={12} md={4} lg={{ span: 3, offset: 1 }}>
                            <Button onClick={this.showformHandler}>CREATE NEW ROLE</Button>
                        </Col>
                    </Row>
                </Form>
                {this.props.showForm && <RoleForm addRole={this.props.addRole} />}
            </div>
        )
    }
}

export default FilterForm;