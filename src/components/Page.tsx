import { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Container, Row } from "react-bootstrap";

import * as React from 'react';
import { Link, Redirect, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { useObjectContext } from "../ObjectContext";
import ObjectCard from "./Card";

export interface IPageProps {
}

export interface IPageState {
}

export default function Page (props: IPageProps) {
  const {objects, setObject} = useObjectContext()
  const { pathname: url } = useLocation()

  let params: string[] = []
  url.replace(/\/([\w|\-|.]*)/g, (s, match) => {
    if(match != "") params.push(match)
    return ''
  })

  const JSONtoElements = (obj) => {
    //if the object doesnt have children (i.e. a file)
    //redirect it to its parent folder, by deleting the last part of the url
    if(!obj.children) {
      params.pop()
      const newURL = params.join('/')
      return <Redirect to={`/${newURL}`} />
    }

    //sorts objects based on whether they are folders or files
    obj.children.sort( (a,b) => {
      if(a.children && b.children) return 0;
      if(a.children) return -1;
      if(b.children) return 1;
    })

    let prod = obj.children.map( js => {
      return <ObjectCard className="mb-5" key={js.name} json={js} />
    })
    return prod
  }

  const processPath = () => { 
    for(let obj of objects) {
      if(obj.name.toLowerCase() === params[0].toLowerCase()) {
        console.log('Success')
        console.log(params)
        let selectedObj = obj
        for(let i = 1; i < params.length; i++) {
          // console.log(selectedObj.children[0].name)
          // console.log(params.length - i)
          // console.log(params[i])
          const search = selectedObj.children.find((child) => (child.name.toLowerCase() === params[i].toLowerCase()))
          console.log(search)
          if(search) {
            selectedObj = search
          } else {
            return <div>Nothing Found</div>;
          }
          console.log('name: '+selectedObj.name)
        }
        return JSONtoElements(selectedObj)

        // console.log(obj.children)
        
        // return (
        //   <Card json={obj.children[0]} />
        // );
      }
    } 

    return <div>Nothing Found</div>;
  }

  const makeBreadCrumbs = () => {

    const prepareHref = (par: string) => {
      let url = '/'
      for(let i = 0; i <= params.indexOf(par); i++) {
        if(params[i].slice(params[i].length-2, 1) === '/') url += params[i];
        else url += params[i]+'/';
      }
      return url
    }

    return (
      <Breadcrumb>
        {params.map( (par) => (
          <Breadcrumb.Item>
            <Link to={prepareHref(par)} className=" link-dark">{par}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }

  return (
    <div>
      <Container fluid>
        <Row className="breadcrumbCustom mt-3 pt-2">
          {makeBreadCrumbs()}
        </Row>
        <Row className="mt-3 mb-3">        
          {processPath()}
        </Row>
      </Container>
    </div>
  );
}
