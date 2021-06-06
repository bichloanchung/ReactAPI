import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/characters'>
                    <Menu.Item name='Welcome to Star Wars Characters API...!!!!' />
                </Link>
            </Container>   
        </Menu>
    )
}