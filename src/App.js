import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admission from './Admission/admission';
import VisaProcessing from './VisaProcessing/visaprocessing';
import Faq from './Faq/faq';
import Blog from './Blog/blog';
import Nav from './Web-bricks/Shared/nav/components/nav';
import Logo from './Home/logo';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav
            Logo={Logo}

                titles={[
                {name: 'Home',link:'/'},
                {name: 'Admissions',sectionLink:'admissions'},
                {name: 'Events',sectionLink:'events'},
                {name: 'FAQ',link: '/faq'},
                {name: 'Blog',link:'/blog'},
                {name: 'Contact', sectionLink: 'contact'}
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
          <Route path = "/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
