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

    let {pathname: url} = useLocation()

    if(url.slice(url.length-1) === '/') url += jsn.name;
    else url += '/'+jsn.name;

    const icon = () => {
        if(jsn.children) {
            return folderIcon
        } else {
            return pdfIcon;
        }
    }

    if(jsn.children) {
        return (
            <>
            <Col xs={6} sm={3} md={2} lg={1} className={props.className? props.className : ""}>
                <Link to={url}>
                    <Image src={icon()} fluid className='foldernfilesButtons'/>
                    <div className="ObjectCardTitle rounded ps-1 mt-1 bg-light link-dark">
                        {jsn.name.replace(/_/g, ' ')}
                    </div>
                </Link>
            </Col>
            </>
        );
    } else {
        return (
            <>
            <Col xs={6} sm={3} md={2} lg={1} className={props.className? props.className : ""}>
                <a href={jsn.link} target={"_blank"}>
                    <Image src={icon()} fluid className='foldernfilesButtons'/>
                    <div className="ObjectCardTitle rounded ps-1 mt-1 bg-light link-dark">
                        {jsn.name.replace(/_/g, ' ')}
                    </div>
                </a>
            </Col>
            </>
        );
    }
}
