import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card'; 
const API_KEY = import.meta.env.VITE_API_KEY;

export default function CityForm() {
    const [location, setLocation]= useState({display_name: "info"})
    const [searchQuery, setSearchQuery]= useState('')

    async function getLocation(event){
      event.preventDefault();
        const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
        const response = await axios.get(API);
        const locationObj = response.data[0];
    setLocation(locationObj);
    }

    function updateQuery(event){
        setSearchQuery(event.target.value)

    }

    function generateMapUrl(){
      
        return `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=12`;
      };
     
    
     
  return (
    <>
    <Form onSubmit={getLocation}>
      <Form.Group className="mb-3" >
        <Form.Control   placeholder="Enter City" onChange={updateQuery}/>
      </Form.Group>
    
      <Button  variant="primary" type="submit">
        Explore
      </Button>
      <p>City:{location.display_name}</p>
      <p>Latitude:{location.lat}</p>
      <p>Longitude:{location.lon}</p>
    </Form>
    
            <Card bg="secondary" border="primary" style={{ width: '45rem', margin:'auto' }}>
            <Card.Body >
              <img src={generateMapUrl()} alt="Static Map" width="100%" />
            </Card.Body>
          </Card>
     </>
  );
   
}

