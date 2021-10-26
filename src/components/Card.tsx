import * as React from 'react';
import { Col, Image } from 'react-bootstrap';
import { JSONobject } from '../JSONobjectInterface';

import pdfIcon from '../assets/pdfIcon.png'
import folderIcon from '../assets/folderIcon.png'
import { Link, Route, useLocation, useRouteMatch } from 'react-router-dom';
import { ClassElement } from 'typescript';
import Page from './Page';

export interface ICardProps {
    json: JSONobject;
    className?: string
}

export default function ObjectCard (props: ICardProps) {
    const jsn = props.json
    const name = jsn.name;

    const {pathname: url} = useLocation()

    const icon = () => {
        if(jsn.children) {
            return folderIcon
        } else {
            return pdfIcon;
        }
    }

    return (
        <>
        <Col xs={6} sm={3} md={2} lg={1} className={props.className? props.className : ""}>
            <Link to={`${url}/${jsn.name}`} target={jsn.children? "" : "_blank"}>
                <Image src={icon()} fluid/>
                <div className="ObjectCardTitle rounded ps-1 mt-1">
                    {jsn.name.replace(/_/g, ' ')}
                </div>
            </Link>
        </Col>

        {/* <Route path={`${path}/:id`}>
            <Page />
        </Route> */}
        </>
    );
}
