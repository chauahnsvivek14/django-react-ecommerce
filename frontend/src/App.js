import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
      <Router>
        <Header />
          <main>
            <Container>
              <Route path='/' component={HomeScreen} exact />  
              <Route path='/product/:id' component={ProductScreen} exact />
            </Container>
          </main>
        <Footer />
      </Router>
  );
}

export default App;
