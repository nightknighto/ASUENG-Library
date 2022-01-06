import { useState } from "react"
import { Alert, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function MainPage() {
    const [dd, sss] = useState(true)
    document.title = 'ASUENG Library'

    return(
            <Container fluid className='mainPage'>
                <Row className="">
                    <Alert variant='warning' className="">
                        The website is still under construction, with many features and buttons not properly made yet. Only a limited
                        number of Courses are available right now. Thanks for your understanding.
                    </Alert>
                    <Col xs={12} className="d-grid mt-2">
                        <Link to="/Freshmen" className="MainPageButtons freshmen border border-4 border-warning" />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/Electrical" className="MainPageButtons electrical border border-4 border-warning" />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/Mechanical" className="MainPageButtons mechanical border border-4 border-warning" />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/Architecture" className="MainPageButtons architecture border border-4 border-warning" />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/Civil" className="MainPageButtons civil border border-4 border-warning" />
                    </Col>
                </Row>
            </Container>
    )
}