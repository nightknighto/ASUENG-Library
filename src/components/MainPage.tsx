import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function MainPage() {
    const [dd, sss] = useState(true)

    return(
            <Container fluid className='mainPage'>
                <Row className="mt-1">
                    <Col xs={12} className="d-grid mt-4">
                        <Link to="/fresh" className="MainPageButtons freshmen border border-4 border-warning" />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/electrical" className="MainPageButtons electrical border border-4 border-warning" />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/mech" className="MainPageButtons mechanical border border-4 border-warning" />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/arch" className="MainPageButtons architecture border border-4 border-warning" />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/civil" className="MainPageButtons civil border border-4 border-warning" />
                    </Col>
                </Row>
            </Container>
    )
}