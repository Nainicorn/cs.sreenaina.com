import { Switch, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header';
import Guidelines from './components/Guidelines';
import Assignments from './components/Assignments';
import Takeaways from './components/Takeaways';
import Wid from './components/Wid';
import Coding from "./components/Coding";
import Sources from "./components/Sources";

function App() {
  return (
    <>
      <Header />
      <section>
        <Switch>
          <Route path="/guidelines" component={Guidelines} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/takeaways" component={Takeaways} />
          <Route path="/coding" component={Coding} />
          <Route path="/sources" component={Sources} />
          <Route path="/" component={Wid} />
        </Switch>
      </section>
    </>
  );
}

export default App;