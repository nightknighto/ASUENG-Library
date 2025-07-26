import { Col, Image } from 'react-bootstrap';
import { ProjectObject } from '../ProjectObjectInterface';

import pdfIcon from '../assets/pdfIcon.png'
import folderIcon from '../assets/folderIcon.png'
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './Main';

export interface ICardProps {
    json: ProjectObject;
    className?: string
}

export default function ObjectCard (props: ICardProps) {
    const {theme, } = useContext(ThemeContext);
    const dark = theme == "dark"
    
    const jsn = props.json

    let {pathname: url} = useLocation()

    if(url.slice(url.length-1) === '/') url += jsn.name;
    else url += '/'+jsn.name;
    url = url.replace(/ /g, '_')
    
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
                    <div className={`ObjectCardTitle rounded ps-1 mt-1 ${dark? "bg-light link-dark" : "bg-light link-primary"}`}>
                        {jsn.name.replace(/_/g, ' ')}
                    </div>
                </Link>
            </Col>
            </>
        );
    } else {
        return (
            <>
            <Col xs={6} sm={3} md={2} lg={2} xl={1} className={props.className? props.className : ""}>
                <a href={jsn.link} target="_blank" rel="noreferrer">
                    <Image src={icon()} fluid className='foldernfilesButtons'/>
                    <div className={`ObjectCardTitle rounded ps-1 mt-1 ${dark? "bg-light link-dark" : "bg-light link-primary"}`}>
                        {jsn.name.replace(/_/g, ' ')}
                    </div>
                </a>
            </Col>
            </>
        );
    }
}
