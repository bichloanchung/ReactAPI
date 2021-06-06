import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';
import {Container, Dimmer, Loader } from 'semantic-ui-react';
import People from './components/People';

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    fetchPeople();
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
          <Container>

            {loading ? (
              <Dimmer active inverted>
                <Loader>Loading</Loader>
              </Dimmer>
            ) : (
              <Router exact path='/characters'>
                <People data={people}/>
                 
              </Router>
            )}
          
          </Container>
      </Router>
    </div>
  );
}

export default App;
