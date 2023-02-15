import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import CreateGame from './components/CreateGame/CreateGame';
import PageNotFound  from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/game' component={CreateGame} />
        <Route exact path='/game/:id' component={GameDetail} />
        <Route path= '/*' component={PageNotFound} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;