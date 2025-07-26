import { useContext, useState } from "react"
import { Alert, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ThemeContext } from "./Main"

export default function HomePage() {
    document.title = 'ASUENG Library'
    const {theme, } = useContext(ThemeContext);
    const dark = theme == "dark"
    const border = `border border-4 border-${dark? "success" : "success"}`;

    return(
            <Container fluid className='mainPage'>
                <Row className="">
                    <Alert variant={dark? "primary" : "info"} className="">
                        The website is still under construction, with many features and buttons not properly made yet. Only a limited
                        number of Courses are available right now. Thanks for your understanding.
                    </Alert>
                    <Col xs={12} className="d-grid mt-2">
                        <Link to="/Freshmen" className={`MainPageButtons freshmen ${border}`} />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/Electrical" className={`MainPageButtons electrical ${border}`} />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/Mechanical" className={`MainPageButtons mechanical ${border}`} />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/Architecture" className={`MainPageButtons architecture ${border}`} />
                    </Col>
                    <Col xs={12} sm={6}  md={3} className="d-grid mt-4">
                        <Link to="/Civil" className={`MainPageButtons civil ${border}`} />
                    </Col>
                </Row>
            </Container>
    )
}