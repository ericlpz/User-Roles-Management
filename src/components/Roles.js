import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Roles = ({name, type, description, active}) => {

    return (
        <div>
            { active === 'yes' ? <Badge variant="success">Active</Badge> : <Badge variant="danger">Inactive</Badge> }
            <h2>{ name }</h2>
            <h3>{ type }</h3>
            <p>{ description }</p>
        </div>
    );
}

export default Roles;