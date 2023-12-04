import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function CityForm() {
    const [location, setLocation]= useState({display_name: "info"})
    const [searchQuery, setSearchQuery]= useState('')

    async function getLocation(event){
      event.preventDefault();
      console.log("hello")
        const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
        const response = await axios.get(API);
        const locationObj = response.data[0];
    setLocation(locationObj);
        console.log(response)
    }

    function updateQuery(event){
        setSearchQuery(event.target.value)

    }

   
    
    
    
  return (
    <Form onSubmit={getLocation}>
      <Form.Group className="mb-3" >
        <Form.Control   placeholder="Enter City" onChange={updateQuery}/>
      </Form.Group>
      <p>City:{location.display_name}</p>
      <p>Latitude:{location.lat}</p>
      <p>Longitude:{location.lon}</p>
      <Button  variant="primary" type="submit">
        Explore
      </Button>
    </Form>
  );
   
}

