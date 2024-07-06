import { useContext } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Main";

const linkcls = "link-light"
const titlecls = "footerTitle text-uppercase fw-bold mb-4 text-success"

const xsSize = 6
const mdSize = 3

export default function Footer() {
    const {theme, setTheme} = useContext(ThemeContext);
    const dark = theme === "dark";
    
    return (    
        <footer className={`footer ${dark? "" : "text-secondary"}`}>
            <div className={`bg-${dark? "secondary" : "primary"} pt-3`}>
                <Container className="">
                    <Row className="text-center">
                        <p>
                            This website was made by <strong className={`text-${dark? "primary":"warning"}`}>Ahmed Atwa</strong>, an Electrical Sophomore student in ASU. The website is still under construction,
                            and a lot of features haven't been made yet. It was made using React & Typescript.
                        </p>
                        <strong>
                            This Term's Course Managers: Electrical - <strong className={`text-${dark? "primary":"warning"}`}>Ahmed Atwa</strong>, Mechanical - <strong className={`text-${dark? "primary":"warning"}`}>Mahmoud Ayman</strong>.
                        </strong>
                    </Row>
                    <Row className=" mt-3">
                        <Col xs={xsSize} md={mdSize}>
                            <h6 className={titlecls}>
                                <i className="fas fa-gem me-3"></i>The Project
                            </h6>
                            <ul className="list-unstyled ps-3 footerList">
                                <li><Link to='#' className={linkcls}>About</Link></li>
                                {/* <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li> */}
                            </ul>
                        </Col>
                        <Col xs={xsSize} md={mdSize}>
                            <h6 className={titlecls}>
                                <i className="fas fa-gem me-3"></i>Departments
                            </h6>
                            <ul className="list-unstyled ps-3 footerList">
                                <li><Link to='/Freshmen' className={linkcls}>Freshmen</Link></li>
                                <li><Link to='/Electrical' className={linkcls}>Electrical</Link></li>
                                <li><Link to='/Mechanical' className={linkcls}>Mechanical</Link></li>
                                <li><Link to='/Architecture' className={linkcls}>Architecture</Link></li>
                                <li><Link to='/Civil' className={linkcls}>Civil</Link></li>
                            </ul>
                        </Col>
                        <Col xs={xsSize} md={mdSize}>
                            <h6 className={titlecls}>
                            <i className="fas fa-gem me-3"></i>Contribute
                            </h6>
                            <ul className="list-unstyled ps-3 footerList">
                                <li><Link to='#' className={linkcls}>Upload to a Course</Link></li>
                                <li><Link to='#' className={linkcls}>Support Us</Link></li>
                                {/* <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li>
                                <li><Link to='' className={linkcls}>item 1</Link></li> */}
                            </ul>
                        </Col>
                        <Col xs={xsSize} md={mdSize}>
                            <h6 className={titlecls}>
                                <i className="fas fa-gem me-3"></i>Contact
                            </h6>
                            <ul className="list-unstyled ps-3 text-light footerList">
                                <li><i className="fas fa-envelope me-1"/>ahmedatwa866@yahoo.com</li>
                                <li><i className="fab fa-facebook me-1"/><a href="https://www.facebook.com/ahmed.atwa.96387" target="_blank" rel="noreferrer">Visit Facebook Profile</a></li>
                                <li><i className="fab fa-linkedin me-1"/><a href="https://www.linkedin.com/in/ahmed-mohamed-atwa" target="_blank" rel="noreferrer">Visit LinkedIn Profile</a></li>
                                <li><i className="fab fa-github me-1"/><a href="https://github.com/nightknighto" target="_blank" rel="noreferrer">Visit Github Profile</a></li>
                                {/* <li>item 1</li>
                                <li>item 1</li> */}
                            </ul>
                        </Col>
                    </Row>
                    <Row className="text-center bg-gradient mb-3">
                        <h5 className="text-black">Disclaimer: This website is not affiliated with Faculty of Engineering, ASU.
                        None of the files linked here are owned by me. This is just a platform for sharing file links.</h5>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}