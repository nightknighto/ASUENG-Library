import { Button, Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { JSONobject } from "../JSONobjectInterface";

interface I_ButtonLayout {
    Folder: JSONobject
}

export default function ButtonLayout({Folder}: I_ButtonLayout) {

    let {pathname: url} = useLocation()
    if(url.slice(url.length-1) === '/') url = url.slice(0, url.length-1);

    return (
        <Row className="justify-content-center gap-4">
            {Folder? Folder.buttons.map( (button) => (
                <Col xs={12} md={10} lg={4}>
                    {button.buttons? 
                    //notice: Replace spaces with '_' in links.
                    <Link to={`${url}/${button.name.replace(/\s/g, '_')}`} className="d-grid">
                        <Button variant="warning" size="lg">{button.name}</Button>
                    </Link>
                    :
                    <Link to={`/${button.name.replace(/\s/g, '_')}`} className="d-grid">
                        <Button variant="primary" size="lg">{button.name}</Button>
                    </Link>
                    }
                </Col>
            ))
            : null}
        </Row>
    )
}