import React, { useEffect, useState } from "react";
import { Form, FormControl, Button, Nav } from "react-bootstrap";
import { JSONobject } from "../JSONobjectInterface";
import Autosuggest from 'react-autosuggest';

export default function Search() {
    const [object, setObject] = useState<JSONobject[]|null>([])

    useEffect( () => {
        fetch('https://deadreyo.github.io/React-Project-nodeJS/dist/search.json')
    .then( response => {

    //   console.log(response.status)
    //   console.log(response.statusText)
      if(!response.ok) {
        // if(response.status === 404) 
        //     setStatus(statusConsts.notFound);
        // else setStatus(response.statusText);

        throw response.status
      }
        
      return response.json()
    })
    .then( body => {
      console.log(JSON.stringify(body))
      setObject(body)
    //   setStatus(statusConsts.ready)
    })
    .catch( error => console.log('Search Fetch issue: '+ error))
    },[])

    return(
        <Nav className='mt-3 mt-lg-0'>
            <Form className="d-flex">
                {/* <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    list="searchlist"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                /> */}
                <div className="me-2 h-100">
                    <SearchData data={object}/>
                </div>
                <Button variant="outline-success">Search</Button>
            </Form>
        </Nav>
    )
}


// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  }
];


// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

function SearchData({data}: {data: JSONobject[]}) {

    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : data.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    const[value, setValue] = useState('')
    const[suggestions, setSuggestions] = useState([])

    const onChange = (event, { newValue }) => {
        setValue(newValue);
    }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value))
    };

  // Autosuggest will call this function every time you need to clear suggestions.
    const onSuggestionsClearRequested = () => {
        setSuggestions([])
    };

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  
}
