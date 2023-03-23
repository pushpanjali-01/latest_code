
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';

import React from 'react';
import Homepage from './modules/homepage';
import Aboutuspage from './modules/aboutuspage';
import Careerspage from './modules/careerspage';
import Contactuspage from './modules/contactuspage';
import Privacyandpolicy from './modules/privacypolicy';
import Termsandconditions from './modules/termsandconsitions';
import Faqs from './modules/faqs'
import Jobspage from './modules/jobspage';
import Applyjobpage from './modules/applyjobpage';
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/careerspage" component={Careerspage} />
        <Route exact path="/aboutuspage" component={Aboutuspage} />
        <Route exact path="/contactuspage" component={Contactuspage} />
        <Route exact path="/privacypolicy" component={Privacyandpolicy} />
        <Route exact path="/termsandconditions" component={Termsandconditions} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/jobspage" component={Jobspage} />
        <Route exact path="/applyjobpage" component={Applyjobpage} />
      </Switch>
    </React.Fragment>
  )
};

export default App;
