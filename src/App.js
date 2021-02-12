import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admission from './Admission/admission';
import VisaProcessing from './VisaProcessing/visaprocessing';
import Faq from './Faq/faq';
import Blog from './Blog/blog';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path = "/admission">
              <Admission />
          </Route>
          <Route path = "/visaprocessing">
            <VisaProcessing />
          </Route>
          <Route path = "/faq">
            <Faq />
          </Route>
          <Route path = "/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
