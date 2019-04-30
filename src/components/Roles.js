import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Roles = ({name, type, description, active}) => {

    return (
        <div>
            { active === 'yes' ? <Badge variant="success">Valid</Badge> : <Badge variant="danger">Invalid</Badge> }
            <h2>{ name }</h2>
            <h3>{ type }</h3>
            <p>{ description }</p>
        </div>
    );
}

export default Roles;