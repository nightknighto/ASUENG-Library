import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkcls = "link-light"
const titlecls = "footerTitle text-uppercase fw-bold mb-4 text-success"

const xsSize = 6
const mdSize = 3

export default function Footer() {

    return (    
        <footer className="footer">
            <div className="bg-secondary pt-3">
                <Container className="">
                    <Row className="text-center">
                        <p>
                            This website was made by a student.
                        </p>
                    </Row>
                    <Row className=" mt-3">
                        <Col xs={xsSize} md={mdSize}>
                            <h6 className={titlecls}>
                                <i className="fas fa-gem me-3"></i>Info
                            </h6>
                            <ul className="list-unstyled ps-3 footerList">
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                            </ul>
                        </Col>
                        <Col xs={xsSize} md={mdSize}>
                            <h6 className={titlecls}>
                                <i className="fas fa-gem me-3"></i>Departments
                            </h6>
                            <ul className="list-unstyled ps-3 footerList">
                                <li><Link to='/freshmen' className={linkcls}>Freshmen</Link></li>
                                <li><Link to='/electrical' className={linkcls}>Electrical</Link></li>
                                <li><Link to='/mechanical' className={linkcls}>Mechanical</Link></li>
                                <li><Link to='/architecture' className={linkcls}>Architecture</Link></li>
                                <li><Link to='/civil' className={linkcls}>Civil</Link></li>
                            </ul>
                        </Col>
                        <Col xs={xsSize} md={mdSize}>
                            <h6 className={titlecls}>
                            <i className="fas fa-gem me-3"></i>Contribute
                            </h6>
                            <ul className="list-unstyled ps-3 footerList">
                                <li><Link to='#' className={linkcls}>Upload to a Course</Link></li>
                                <li><Link to='' className={linkcls}>Support Us</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                            </ul>
                        </Col>
                        <Col xs={xsSize} md={mdSize}>
                            <h6 className={titlecls}>
                                <i className="fas fa-gem me-3"></i>Contact
                            </h6>
                            <ul className="list-unstyled ps-3 text-light footerList">
                                <li><i className="fas fa-envelope me-1"/>ahmedatwa866@yahoo.com</li>
                                <li><i className="fab fa-discord me-1"/>NightKnight#3701</li>
                                <li><i className="fab fa-facebook me-1"/><a href="https://www.facebook.com/ahmed.atwa.96387" target="_blank" rel="noreferrer">Visit Facebook Profile</a></li>
                                {/* <li>item 1</li>
                                <li>item 1</li> */}
                            </ul>
                        </Col>
                    </Row>
                    <Row className="text-center bg-gradient mb-3">
                        <h5 className="text-black">Disclaimer: This website is not affiliated with Faculty of Engineering, ASU.
                        None of the files hosted here are owned by me. This is just a platform for sharing files.</h5>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}