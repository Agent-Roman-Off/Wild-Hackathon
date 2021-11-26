import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Decade60s from './Components/Decade60s/Decade60s';
import Decade70s from './Components/Decade70s/Decade70s';
import Decade80s from './Components/Decade80s/Decade80s';
import Decade90s from './Components/Decade90s/Decade90s';
import Decade00s from './Components/Decade00s/Decade00s';
import Decade10s from './Components/Decade10s/Decade10s';
import DecadeDetails from './Components/DecadeDetails/DecadeDetails';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <main className="Main">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/decadeDetails" component={DecadeDetails} />
        <Route path="/decade60s" component={Decade60s} />
        <Route path="/decade70s" component={Decade70s} />
        <Route path="/decade80s" component={Decade80s} />
        <Route path="/decade90s" component={Decade90s} />
        <Route path="/decade00s" component={Decade00s} />
        <Route path="/decade10s" component={Decade10s} />
      </Switch>
    </main>
  );
}

export default App;
