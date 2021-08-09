import React from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Row, Container, Dropdown} from "react-bootstrap";

function NavigationBar(){
    return(
            <Row>
                <Navbar style={{background:'#FFFFFF'}} expand="xl">
                    <Container>
                        <Navbar.Brand href="#">Mintable</Navbar.Brand>
                            <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                            <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            >
                                <Nav.Link href="#action1">Browse</Nav.Link>
                                <Nav.Link href="#action2">Discover</Nav.Link>
                                <Nav.Link href="#action2">Mint an Item</Nav.Link>
                                <Nav.Link href="#action2">Vote/DAO</Nav.Link>
                                <NavDropdown title="My Account" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Ethereum
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
    )
}

export default NavigationBar