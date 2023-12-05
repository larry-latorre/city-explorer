import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CityForm from './components/Form';
import Footer from './components/Footer';
function App() {
  

  return (
    <Container>
      <Header />
      <CityForm />
      <Footer />
    </Container>
  )
}

export default App
