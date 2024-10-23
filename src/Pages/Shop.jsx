import { Fragment } from "react"
import { Button, Card, Carousel, Col, Container, FloatingLabel, Form, Image, Nav, Navbar, NavDropdown, Row, Stack, Table } from "react-bootstrap"
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6"

const Shop = () => {
    return <Fragment>
        <Navbar expand="md" className="">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Image height={45} src="https://icubeelectronics.com/wp-content/uploads/2018/06/flipkart-logo-yellow.png"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Carousel nextIcon={<FaCircleArrowRight />} prevIcon={<FaCircleArrowLeft />}>
            <Carousel.Item>
                <Image style={{width: "100%", height: "500px"}} src="./ad1.png"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image style={{width: "100%", height: "500px"}} src="./ad2.png"/>
            </Carousel.Item>
            <Carousel.Item>
                <Image style={{width: "100%", height: "500px"}} src="./ad3.png"/>
            </Carousel.Item>
        </Carousel>
        <div className="d-flex overflow-auto gap-2">
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71C8fZzC4yL.jpg" />
                <Card.Body className="text-center">
                    <Card.Title>Xtream</Card.Title>
                    <Card.Text>Sample description</Card.Text>
                    <Button variant="success" className="w-100">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>

        {/* <Stack direction="horizontal" gap={5}>
            <div className="p-2">First item</div>
            <div className="p-2">Second item</div>
            <div className="p-2">Third item</div>
        </Stack> */}

        <Form>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter Username"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Enter Username"/>
            </Form.Group>
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
            <Button variant="success">Submit</Button>
        </Form>

        

        <footer>
            <Container fluid className="remove-list-style">
                <Row>
                    <Col xs={12} sm={6}  md={4} lg={3}>
                        <ul>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <ul>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <ul>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <ul>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                            <li>Sample</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
        
    </Fragment>
}

export default Shop