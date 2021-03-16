import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Home from './Home';
import WorkTimes from './WorkTimes';
import Works from './Works';

function App() {
  return (
    <Router>
      <Container>
        <h1 className='App__header'>Test -- Node -- Heroku</h1>
        <Header />

        <Route path='/' exact={true} component={ Home } />
        <Route path='/worktimes' component={ WorkTimes } />
        <Route path='/works' component={ Works } />

      </Container>
    </Router>
  );
}

export default App;

/***
 * import React from 'react'
 import ReactDOM from 'react-dom'
 import { BrowserRouter as Router, Route } from 'react-router-dom'
 import 'bootstrap/dist/css/bootstrap.min.css'

 import { Navbar } from './components/navbar'
 import { UsersList } from './components/users-list'
 import { ExercisesList } from './components/exercises-list'
 import { CreateUser } from './components/create-user'
 import CreateExercise from './components/create-exercise'
 import EditExercise from './components/edit-exercise'

 const App = () => (
 <Router>
 <div className='container'>
 <Navbar />
 <Route path='/' exact component={UsersList} />
 <Route path='/exercises' component={ExercisesList} />
 <Route path='/create-user' component={CreateUser} />
 <Route path='/create-exercise' component={CreateExercise} />
 <Route path='/edit/:id' component={EditExercise} />
 </div>
 </Router>
 )
 *
 */
