import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import CityForm from './components/Form';
function App() {
  

  return (
    <Container>
      <Header />
      <CityForm />
    </Container>
  )
}

export default App
