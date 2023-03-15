import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admission from './Admission/admission';
import VisaProcessing from './VisaProcessing/visaprocessing';
import Faq from './Faq/faq';
import Blog from './Blog/blog';
import Nav from './web-bricks/Shared/nav/components/nav';
import Logo from './Home/logo';
import Privacy from './privacy';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Nav
          id="gd-nav"
            Logo={Logo}
                titles={[
                {name: 'Admissions',sectionLink:'admissions'},
                {name: 'FAQ',link: '/faq'},
                {name: 'Blog',link:'/blog'},
                {name: 'Contact', sectionLink: 'contact'},
                {name: 'Terms', link: '/terms'},
        ]} />
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
          <Route path = "/terms">
          <Privacy />
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
