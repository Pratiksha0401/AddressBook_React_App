
import AddressbookForm from './components/addressbook-form/addressbook-form'
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="" >
          <AddressbookForm />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;