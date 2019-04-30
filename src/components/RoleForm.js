import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RoleForm extends Component {

    nameInput = React.createRef();
    roleInput = React.createRef();
    descInput = React.createRef();

    addHandler = (e) => {
        e.preventDefault();
        this.props.addRole(this.nameInput.current.value, this.roleInput.current.value, this.descInput.current.value);
        e.currentTarget.reset();
        if (this.nameInput.current.value === "" || this.roleInput.current.value === "" || this.descInput.current.value === "" ){
            e.preventDefault();
        }
    }

    render (){
        return (
            <div>
                <Form onSubmit={this.addHandler} className="roleform">
                <hr/>
                    <Row>
                        <Col xs={12} md={3} lg={3}>
                          <Form.Control type="text" required ref={this.nameInput} className="custom" placeholder="Enter Name" />
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                          <Form.Control type="text" required ref={this.roleInput} className="custom" placeholder="Enter role type" />
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                          <Form.Control type="text" required ref={this.descInput} className="custom" placeholder="Enter description" />
                        </Col>
                        <Col md={3} lg={3}>
                            <Button type="submit">ADD ROLE</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default RoleForm;