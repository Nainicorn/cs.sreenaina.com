import { Switch, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header';
import Guidelines from './components/Guidelines';
import Assignments from './components/Assignments';
import Takeaways from './components/Takeaways';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Switch>
          <Route path="/guidelines" component={Guidelines} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/takeaways" component={Takeaways} />
          <Route path="/" component={Home} />
        </Switch>
      </section>
    </div>
  );
}

export default App;