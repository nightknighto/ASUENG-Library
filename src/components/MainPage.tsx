import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import Stack from 'react-bootstrap/Stack'

export default function MainPage() {
    const [dd, sss] = useState(true)

    return(
            <Container fluid className='mainPage'>
                <Row className="mt-1">
                    <Col xs={12} className="d-grid mt-4">
                        <Button className="MainPageButtons freshmen" variant="warning" size='lg'>Freshmen</Button>
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Button className="MainPageButtons" variant="warning" size='lg'>Electrical</Button>
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Button className="MainPageButtons" variant="warning" size='lg'>Mechanical</Button>
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Button className="MainPageButtons" variant="warning" size='lg'>Architecture</Button>
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Button className="MainPageButtons" variant="warning" size='lg'>Civil</Button>
                    </Col>
                </Row>
            </Container>
    )
}