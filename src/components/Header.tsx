import { useContext } from "react";
import { Button, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { ThemeContext } from "./Main";
import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
    const {theme,} = useContext(ThemeContext);
    const dark = theme === "dark"

    return(
        <div>
            <Navbar collapseOnSelect className='header' fixed='top' expand="lg" bg={dark? "dark":"primary"} variant="dark">
                <Container fluid>
                    <Link to='/'>
                    <Navbar.Brand href="#home" className={`fs-${dark? "4":"3"} pe-3 text-${dark? "primary":"info"}`}>
                        <Image src={logo} className='logo' />
                        {'ASUENG Library'}
                    </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/Freshmen' className=""><Nav.Link href="/Freshmen">Freshmen</Nav.Link></Link>
                            <Link to='/Electrical' className=""><Nav.Link href="/Electrical">Electrical</Nav.Link></Link>
                            
                            {/* <NavDropdown title="Electrical" id="collasible-nav-dropdown"> */}
                                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            {/* </NavDropdown>               */}
                            {/* <Nav.Link href="/Mechanical">Mechanical</Nav.Link> */}
                            <Link to='/Mechanical' className=""><Nav.Link href="/Mechanical">Mechanical</Nav.Link></Link>
                            {/* <NavDropdown title="Mechanical" id="collasible-nav-dropdown"> */}
                                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            {/* </NavDropdown>         */}
                            {/* <Nav.Link href="/Architecture">Architecture</Nav.Link> */}
                            <Link to='/Architecture' className=""><Nav.Link href="/Architecture">Architecture</Nav.Link></Link>
                            {/* <NavDropdown title="Architecture" id="collasible-nav-dropdown"> */}
                                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            {/* </NavDropdown>                       */}
                            {/* <Nav.Link href="/Civil">Civil</Nav.Link> */}
                            <Link to='/Civil' className=""><Nav.Link href="/Civil">Civil</Nav.Link></Link>
                            {/* <NavDropdown title="Civil" id="collasible-nav-dropdown"> */}
                                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                // <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            {/* </NavDropdown> */}
                        </Nav>
                        <ThemeSwitch />
                        <Search />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}