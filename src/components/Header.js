import React from 'react';
import Col from 'react-bootstrap/Col';
import FilterForm from './FilterForm';

const Header = ({searchQuery, filterQuery}) => {
    return (
        <header>
            <Col>
                <h1>User Roles Management</h1>
            </Col>
            <FilterForm filterQuery={filterQuery} searchQuery={searchQuery} />
        </header>
    )
}

export default Header;