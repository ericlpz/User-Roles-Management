import React from 'react';

const Roles = ({name, type, description}) => {

    return (
        <div>
            <h2>{ name }</h2>
            <h3>{ type }</h3>
            <p>{ description }</p>
        </div>
    );
}

export default Roles;