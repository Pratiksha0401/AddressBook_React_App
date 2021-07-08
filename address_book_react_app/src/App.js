
import HomePage from './components/homePage/homePage';
import AddressbookForm from './components/addressbook-form/addressbook-form'
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addressbook-form" component={AddressbookForm} />
        <Route exact path="/addressbook-form/:id" component={AddressbookForm} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;