import React from 'react';
import Col from 'react-bootstrap/Col';

const Associated = ({photo_url, first_name}) => {

    return (
        <Col className="">
            <img alt={first_name} src={photo_url} />
        </Col>
    );
}

export default Associated;